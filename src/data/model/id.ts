import { v4 as uuid } from "uuid";

export default class Id {
   static novo(): string {
      return uuid();
   }

   static isValid(id: string): boolean {
      return typeof id === "string" && id.length === 36;
   }
}
