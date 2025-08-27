"use client";

import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const GoogleMap: React.FC = () => {
  const address = "Дане Крапчев 21/6, Центар-Скопје, Macedonia";
  
  const render = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return (
          <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
            <div className="text-[#1F1514] text-body-medium">Вчитување на мапа...</div>
          </div>
        );
      case Status.FAILURE:
        return (
          <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
            <div className="text-[#1F1514] text-body-medium">Грешка при вчитување на мапа</div>
          </div>
        );
      default:
        return <MapComponent address={address} />;
    }
  };

  return (
    <div className="w-full">
      <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""} render={render}>
        <MapComponent address={address} />
      </Wrapper>
    </div>
  );
};

interface MapComponentProps {
  address: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ address }) => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  React.useEffect(() => {
    if (!mapRef.current) return;

    const geocoder = new google.maps.Geocoder();
    
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const location = results[0].geometry.location;
        
        const mapInstance = new google.maps.Map(mapRef.current!, {
          center: location,
          zoom: 15,
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#f3f0e6" }]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e8f4f8" }]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#5A7D7C" }]
            }
          ]
        });

        new google.maps.Marker({
          position: location,
          map: mapInstance,
          title: "Opfolio",
          icon: {
            url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#F5C322" stroke="#1F1514" stroke-width="2"/>
                <circle cx="20" cy="20" r="8" fill="#1F1514"/>
              </svg>
            `),
            scaledSize: new google.maps.Size(40, 40),
            anchor: new google.maps.Point(20, 20)
          }
        });

        setMap(mapInstance);
      }
    });
  }, [address]);

  return (
    <div className="w-full h-[400px] rounded-[20px] overflow-hidden border-2 border-[#5A7D7C]">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default GoogleMap;
