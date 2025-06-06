import DocumentItems from "@/app/components/DocumentItems";
import React from "react";

const DocumentsPage: React.FC = () => {
  const documentItems = [
    {
      id: "1",
      title: "Општи податоци за ДУФ",
      content: "Содржина на општите податоци за ДУФ...",
    },
    {
      id: "2",
      title: "Основни податоци за членовите на одбор на директори",
      content:
        "Содржина на основните податоци за членовите на одбор на директори...",
    },
    {
      id: "3",
      title: "Активности кои ги врши ДУФ согласно дозволата и член 6 од ЗИФ",
      content: "Содржина на активностите...",
    },
    {
      id: "4",
      title: "Полугодишни и ревидирани годишни извештаи за фондовите",
      content: "Содржина на извештаите...",
    },
    {
      id: "5",
      title: "Општи податоци за депозитарната банка",
      content: "Содржина на податоците за депозитарната банка...",
    },
    {
      id: "6",
      title: "Преглед на фондовите со кои управува",
      content: "Содржина на прегледот на фондовите...",
    },
    {
      id: "7",
      title: "Проспект, Статут, КИД за секој фонд",
      content: "Содржина на документите...",
    },
    {
      id: "8",
      title: "Договори со трети лица со кои ДУФ има склучено договор",
      content: "Содржина на договорите...",
    },
    {
      id: "9",
      title: "Опис на ризиците и за ДУФ и фондовите и степен на влијание",
      content: "Содржина на описот на ризиците...",
    },
    {
      id: "10",
      title: "Цена на уделите",
      content: "Содржина на цената на уделите...",
    },
    {
      id: "11",
      title:
        "Други објави важни за работењето, објави, известувања, информации",
      content: "Содржина на другите објави...",
    },
    {
      id: "12",
      title: "Значајни промени (квалификувано учество)",
      content: "Содржина на значајните промени...",
    },
    {
      id: "13",
      title: "Промени во органи на управување",
      content: "Содржина на промените во органите...",
    },
    {
      id: "14",
      title:
        "Во рок од 10 дена се објавува учество на вработените во друштвото во други трговски друштва со назначување дали фондовите имаат инструменти од тие друштва",
      content: "Содржина на објавувањето...",
    },
    {
      id: "15",
      title:
        "Во рок од 10 дена пред собрание се објавува известување за учество и начин на гласање на собранието",
      content: "Содржина на известувањето...",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif text-center mb-8 md:mb-12">
          Документи
        </h1>
        <DocumentItems items={documentItems} />
      </div>
    </div>
  );
};

export default DocumentsPage;
