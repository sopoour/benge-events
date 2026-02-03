import { Lexikon } from "@app/services/graphql/types";
import { LexikonPage } from "@app/types";

   const kategorieOrderDE = [
  'Allgemeine Begriffe',
  'Geschlechtsidentität / Geschlechtsausdruck',
  'Sexuelle Orientierung',
  'Awareness & Umgang',
  'Machtstrukturen & Ausschlüsse',
];

const kategorieOrderEN = [
  'General',
  'Gender Identity / Expression',
  'Sexual Orientation',
  'Awareness & Care',
  'Power Structures & Exclusions',
];

export type GroupedLexikonData = {
  kategorie: string;
  elements: Lexikon[];
};

export type GroupedOrderedLexikonData = {
  kategorie: string;
  orderedElements: Lexikon[];
  unorderedElements: Lexikon[];
};

const lexikonGrouping = (lang: string, data?: LexikonPage | null) => {
 
const kategorieOrderMap = new Map(
    (lang === 'en' ? kategorieOrderEN : kategorieOrderDE).map((kategorie, index) => [
      kategorie,
      index,
    ]),
  );

  // Group the data based on category and whether the elements have an order number or not
  const groupedData: GroupedOrderedLexikonData[] = data?.lexikonCollection.items.reduce(
    (acc: any, { kategorie, titel, beschreibung, orderNumber }) => {
      let group: any = acc.find((item: Lexikon) => item.kategorie === kategorie);

      if (!group) {
        group = { kategorie, orderedElements: [], unorderedElements: [] };
        acc.push(group);
      }

      const element = { titel, beschreibung, orderNumber };

      if (orderNumber !== null && orderNumber !== undefined) {
        group.orderedElements.push(element);
      } else {
        group.unorderedElements.push(element);
      }

      return acc;
    },
    [],
  );

  // Merge the ordered and unordered elements, sort the unordered elements based on alphabet
  const result: GroupedLexikonData[] = groupedData?.map((group) => ({
    kategorie: group.kategorie,
    elements: [
      ...group.orderedElements?.sort(
        (a, b) => (a.orderNumber as number) - (b.orderNumber as number),
      ),
      ...group.unorderedElements?.sort((a, b) =>
        a.titel && b.titel ? a.titel?.localeCompare(b.titel) : 0,
      ),
    ],
  }));


  // sort the categories based on the manual kategorieOrderMap
  const sortedResult: GroupedLexikonData[] = result?.sort((a, b) => {
    const orderA = kategorieOrderMap.get(a.kategorie) ?? Number.MAX_SAFE_INTEGER;
    const orderB = kategorieOrderMap.get(b.kategorie) ?? Number.MAX_SAFE_INTEGER;

    return orderA - orderB;
  });

  return sortedResult;

}

export default lexikonGrouping;