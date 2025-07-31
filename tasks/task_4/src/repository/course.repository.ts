import { Course } from "../models/course";
import { BaseRepository } from "./base.repository";

export class CourseRepository extends BaseRepository<Course> {
  constructor() {
    super([
      {
        id: "101",
        title: "TypeScript Basics",
        description: "Learn the basics of TS",
      },
      {
        id: "102",
        title: "Advanced JS",
        description: "Deep dive into JavaScript",
      },
    ]);
  }
}
