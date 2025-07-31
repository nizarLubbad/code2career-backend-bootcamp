// main.ts
import { UserRepository } from "./repository/user.repository";
import { CourseRepository } from "./repository/course.repository";
import { BookingRepository } from "./repository/booking.repository";

async function testRepositories() {
  const userRepo = new UserRepository();
  const courseRepo = new CourseRepository();
  const bookingRepo = new BookingRepository();

  console.log("=== USERS ===");
  console.log(await userRepo.getAll());

  await userRepo.create({
    id: "3",
    name: "Charlie",
    email: "charlie@example.com",
  });
  console.log(await userRepo.getAll());

  console.log(await userRepo.getById("1"));
  console.log(await userRepo.update("1", { name: "Alice Updated" }));
  console.log(await userRepo.delete("2"));
  console.log(await userRepo.find({ name: "Charlie" }));

  console.log("\n=== COURSES ===");
  console.log(await courseRepo.getAll());
  await courseRepo.create({
    id: "103",
    title: "React",
    description: "Frontend framework",
  });
  console.log(await courseRepo.find({ title: "React" }));

  console.log("\n=== BOOKINGS ===");
  console.log(await bookingRepo.getAll());
  console.log(await bookingRepo.find({ userId: "1" }));
}

testRepositories();
