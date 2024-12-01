export const VACANCIES: Vacancy[] = [
  {
    employer: "Artus Management GmbH",
    dateFrom: "2018-06-01",
    jobName: "Software Developer",
    from: "06/2018",
    to: "02/2019",
    descriptions: [
      "arbitrage program with crypto currencies (CC) ",
      "connect CC-exchanges via rest-api",
      "calculation of arbitrage possibilities",
    ],
  },
  {
    employer: "wunderlabs UG",
    dateFrom: "2019-03-01",
    jobName: "Web Developer",
    from: "02/2019",
    to: "05/2019",
    descriptions: [
      "build websites in html/css/js",
      "cms (craft)",
      " responsive newsletters in mjml ->(will be transpiled in html)",
    ],
  },
  {
    employer: "Juconn GmbH",
    dateFrom: "2019-06-24",
    jobName: "Software Developer",
    from: "06/2019",
    to: "12/2020",
    descriptions: [
      "iot-data connection from device to server (mqtt, http, lorawan)",
      "data visusalizing in auto generated reports",
      " microservices for data validation for different types of devices/networks",
    ],
  },
  {
    employer: "Own Project",
    dateFrom: "2020-07-20",
    jobName: "Automated Forex Trading",
    from: "07/2020",
    to: "now",
    descriptions: [
      "calculation of profitable trades with financial indicators (SMA, EMA, RSI, etc.)",
      "broker api reverse engineered",
      "user administration with personal dashboard and reporting service ",
    ],
  },
  {
    employer: "SprintEins GmbH",
    dateFrom: "2021-06-15",
    jobName: "Software Developer",
    from: "06/2021",
    to: "12/2022",
    descriptions: [
      "emission certification process tool for mercedes-benz",
      "assisting from certification inquiry to .doc-export to the 'KBA'",
      "non-profit projects in cooperation with Caritas",
    ],
  },
  {
    employer: "Interhyp Gruppe",
    dateFrom: "2023-02-01",
    jobName: "Software Engineer",
    from: "02/2023",
    to: "now",
    descriptions: [
      "comparison portal real estate trading",
      "“Home” as new portal for the longterm future",
      "cloud based network of around 100 microservices",
    ],
  },
];

export interface Vacancy {
  employer: string;
  dateFrom: string;
  jobName: string;
  from: string;
  to: string;
  descriptions: string[];
}
