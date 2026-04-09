import db from "#db/client";
import { createEmployee } from "./queries/employees";
import { faker } from "@faker-js/faker";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  for(let i = 0; i < 15; i++){
    await createEmployee({
      name: faker.person.fullName(),
      birthday: faker.date.birthdate({min: 18, max: 68, mode: 'age'}),
      salary: faker.number.int({min: 36000, max: 180000})
    });
  }
}
