console.log("working");

const rawData = {
  Mike: {
    employee: "Mike",
    regular: "39.2856",
    overtime: "0.0000",
    doubletime: "0.0000",
    wageTotal: "1056.4017",
    benefitTotal: "36.8320",
  },
  Steve: {
    employee: "Steve",
    regular: "40.0000",
    overtime: "8.0000",
    doubletime: "1.1658",
    wageTotal: "1653.5979",
    benefitTotal: "49.9036",
  },
  Alex: {
    employee: "Alex",
    regular: "40.0000",
    overtime: "3.6428",
    doubletime: "0.0000",
    wageTotal: "795.3979",
    benefitTotal: "44.5985",
  },
};

const newArr = Object.values(rawData);
// console.log(newArr);

// console.log(newArr[0].employee);
// console.log(newArr[0].regular);

// console.log(newArr[1].employee);

// const index = Object.keys(rawData);
// console.log("index:", index);

const iterator = newArr.keys();

const outputTags = ["jobMeta", "employeeData", "timePunch"];

const jobs = ["Hospital - Laborer", "Hospital - Painter", "Shop - Laborer"];

// for employees
for (const key of iterator) {
  
  const myObject = {};
  myObject.myLabel = "jobMeta";
  const info = newArr[key];
  const name = newArr[key].employee;

  const empData = {
    name,
    regular: info.regular,
    overtime: info.overtime,
    doubletime: info.doubletime,
    wageTotal: info.wageTotal,
    benefitTotal: info.benefitTotal,
  };

  const jsonObject1 = JSON.stringify(empData);

  console.log(jsonObject1);
}

const myObject2 = {};
const empData = [
  {
    employee: newArr[0].employee,
    timePunch: [
      {
        job: jobs[0],
        start: "2022-02-19 08:16:51",
        end: "2022-02-19 10:00:11",
      },
      {
        job: jobs[1],
        start: "2022-02-18 12:29:33",
        end: "2022-02-18 14:00:59",
      },
      {
        job: jobs[2],
        start: "2022-02-19 08:16:51",
        end: "2022-02-19 10:00:11",
      },
      {
        job: jobs[1],
        start: "2022-02-19 11:11:06",
        end: "2022-02-19 12:00:14",
      },
      {
        job: jobs[0],
        start: "2022-02-19 13:22:13",
        end: "2022-02-19 17:16:32",
      },
      {
        job: jobs[1],
        start: "2022-02-20 06:50:12",
        end: "2022-02-20 11:21:11",
      },
      {
        job: jobs[1],
        start: "2022-02-20 13:01:11",
        end: "2022-02-20 17:52:45",
      },
      {
        job: jobs[0],
        start: "2022-02-21 07:08:11",
        end: "2022-02-21 12:22:33",
      },
      {
        job: jobs[1],
        start: "2022-02-21 13:15:10",
        end: "2022-02-21 17:58:06",
      },
      {
        job: jobs[1],
        start: "2022-02-22 07:11:59",
        end: "2022-02-22 11:00:01",
      },
      {
        job: jobs[1],
        start: "2022-02-22 12:16:54",
        end: "2022-02-22 17:59:03",
      },
    ],
  },
  {
    employee: newArr[1].employee,
    timePunch: [
      {
        job: jobs[0],
        start: "2022-02-19 08:16:51",
        end: "2022-02-19 10:00:11",
      },
      {
        job: jobs[1],
        start: "2022-02-18 12:29:33",
        end: "2022-02-18 14:00:59",
      },
      {
        job: jobs[2],
        start: "2022-02-19 08:16:51",
        end: "2022-02-19 10:00:11",
      },
      {
        job: jobs[1],
        start: "2022-02-19 11:11:06",
        end: "2022-02-19 12:00:14",
      },
      {
        job: jobs[0],
        start: "2022-02-19 13:22:13",
        end: "2022-02-19 17:16:32",
      },
      {
        job: jobs[1],
        start: "2022-02-20 06:50:12",
        end: "2022-02-20 11:21:11",
      },
      {
        job: jobs[1],
        start: "2022-02-20 13:01:11",
        end: "2022-02-20 17:52:45",
      },
      {
        job: jobs[0],
        start: "2022-02-21 07:08:11",
        end: "2022-02-21 12:22:33",
      },
      {
        job: jobs[1],
        start: "2022-02-21 13:15:10",
        end: "2022-02-21 17:58:06",
      },
      {
        job: jobs[1],
        start: "2022-02-22 07:11:59",
        end: "2022-02-22 11:00:01",
      },
      {
        job: jobs[1],
        start: "2022-02-22 12:16:54",
        end: "2022-02-22 17:59:03",
      },
    ],
  },
  {
    employee: newArr[0].employee,
    timePunch: [
      {
        job: jobs[0],
        start: "2022-02-19 08:16:51",
        end: "2022-02-19 10:00:11",
      },
      {
        job: jobs[1],
        start: "2022-02-18 12:29:33",
        end: "2022-02-18 14:00:59",
      },
      {
        job: jobs[2],
        start: "2022-02-19 08:16:51",
        end: "2022-02-19 10:00:11",
      },
      {
        job: jobs[1],
        start: "2022-02-19 11:11:06",
        end: "2022-02-19 12:00:14",
      },
      {
        job: jobs[0],
        start: "2022-02-19 13:22:13",
        end: "2022-02-19 17:16:32",
      },
      {
        job: jobs[1],
        start: "2022-02-20 06:50:12",
        end: "2022-02-20 11:21:11",
      },
      {
        job: jobs[1],
        start: "2022-02-20 13:01:11",
        end: "2022-02-20 17:52:45",
      },
      {
        job: jobs[0],
        start: "2022-02-21 07:08:11",
        end: "2022-02-21 12:22:33",
      },
      {
        job: jobs[1],
        start: "2022-02-21 13:15:10",
        end: "2022-02-21 17:58:06",
      },
      {
        job: jobs[1],
        start: "2022-02-22 07:11:59",
        end: "2022-02-22 11:00:01",
      },
      {
        job: jobs[1],
        start: "2022-02-22 12:16:54",
        end: "2022-02-22 17:59:03",
      },
    ],
  },
];

const jsonObject2 = JSON.stringify(empData);

console.log(jsonObject2);

// ////
// const myObject1 = {};
// myObject1.myLabel = "jobMeta";

// const jobMeta = [{ job: "Hospital - Painter", rate: 31.25, benefitsRate: 1 }];
// const jsonObject1 = JSON.stringify(jobMeta);

// console.log(jsonObject1);
