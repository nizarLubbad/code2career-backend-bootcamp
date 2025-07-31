import { Booking } from "../models/booking";
import { BaseRepository } from "./base.repository";

export class BookingRepository extends BaseRepository<Booking> {
  constructor() {
    super([
      { id: "b1", userId: "1", courseId: "101", date: "2025-07-01" },
      { id: "b2", userId: "2", courseId: "102", date: "2025-07-10" },
    ]);
  }
}
