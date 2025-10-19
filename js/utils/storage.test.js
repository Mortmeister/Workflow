import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    const mockUser = { name: "Morten" };

    saveUser(mockUser);

    const result = getUsername();
    expect(result).toBe("Morten");
  });

  it("returns null when no user exists in storage", () => {
    clearStorage();

    const result = getUsername();
    expect(result).toBeNull();
  });
});
