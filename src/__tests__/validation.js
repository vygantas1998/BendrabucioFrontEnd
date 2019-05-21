import { reservartionEndValidation, requiredValidation } from "../validation";

test("Is validation date validation working correctly false", () => {
    const from = {reservation_start_time: new Date()};
    const to = {reservation_end_time:new Date(new Date().getTime() - 5000)};
    const resultFalse = reservartionEndValidation(to.reservation_end_time, from);
    expect(resultFalse).toBe(false);
});
test("Is validation date validation working correctly true", () => {
    const from = {reservation_start_time: new Date()};
    const to = {reservation_end_time:new Date(new Date().getTime() + 5000)};
    const resultTrue = reservartionEndValidation(to.reservation_end_time, from);
    expect(resultTrue).toBe(true);
});

test("Is required validation working correctly false", () => {
    const value = "";
    const resultFalse = requiredValidation(value);
    expect(resultFalse).toBe(false);
});
test("Is required validation working correctly true", () => {
    const value = "test";
    const resultTrue = requiredValidation(value);
    expect(resultTrue).toBe(true);
});