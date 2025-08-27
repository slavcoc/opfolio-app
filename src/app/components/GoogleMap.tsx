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
        return <AddressFallback address={address} />;
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

interface AddressFallbackProps {
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
        
        try {
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
        } catch (error) {
          console.error("Error creating map:", error);
        }
      } else {
        console.error("Geocoding failed:", status);
      }
    });
  }, [address]);

  return (
    <div className="w-full h-[400px] rounded-[20px] overflow-hidden border-2 border-[#5A7D7C]">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

const AddressFallback: React.FC<AddressFallbackProps> = ({ address }) => {
  return (
    <div className="w-full h-[400px] rounded-[20px] border-2 border-[#5A7D7C] bg-[#F3F0E6] flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-16 h-16 bg-[#F5C322] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1F1514"/>
          </svg>
        </div>
        <h3 className="text-[#1F1514] text-heading-3 mb-4">Нашата адреса</h3>
        <p className="text-[#1F1514] text-body-large mb-2">{address}</p>
        <p className="text-[#1F1514] text-body-medium opacity-75">
          Дане Крапчев 21/6, Центар-Скопје
        </p>
        <div className="mt-6 space-y-2">
          <p className="text-[#1F1514] text-body-medium">
            <strong>Телефон:</strong> +389 76 760 767
          </p>
          <p className="text-[#1F1514] text-body-medium">
            <strong>Е-пошта:</strong> info@opfolio.mk
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
