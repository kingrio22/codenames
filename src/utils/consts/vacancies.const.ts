export const VACANCIES: Vacancy[] = [
  {
    employer: "Artus Management GmbH",
    dateFrom: "2018-06-01",
    jobName: "Softwareentwickler",
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
    jobName: "Softwareentwickler",
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
    jobName: "Softwareentwickler",
    from: "06/2019",
    to: "12/2020",
    descriptions: [
      "iot-data connection from device to server (mqtt, http, lorawan)",
      "data visusalizing in auto generated reports",
      " microservices for data validation for different types of devices/networks",
    ],
  },
  {
    employer: "Eigenes Projekt",
    dateFrom: "2020-07-20",
    jobName: "Automatisierter Börsenhandel",
    from: "07/2020",
    to: "jetzt",
    descriptions: [
      "calculation of profitable trades with financial indicators (SMA, EMA, RSI, etc.)",
      "broker api reverse engineered",
      "user administration with personal dashboard and reporting service ",
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
