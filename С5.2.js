
const parser = new DOMParser();
// console.log('parser', parser);
// XML, который мы будем парсить
const xmlString =
    `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
// console.log('xmlString', xmlString);
/* Этап 2. Получение данных */
// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
// Получение всех DOM-нод
const studentNodes = xmlDOM.querySelectorAll("student");
studentNodes.forEach((studentNode) => {
    const nameNode = studentNode.querySelector("name");
    const ageNode = studentNode.querySelector("age");
    const profNode = studentNode.querySelector("prof");
    const firstNode = nameNode.querySelector("first");
    const secondNode = nameNode.querySelector("second");
    const langAttr = nameNode.getAttribute('lang');
    const result = {
        name: firstNode.textContent + ' ' + secondNode.textContent,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr
    }
    console.log(result);
});