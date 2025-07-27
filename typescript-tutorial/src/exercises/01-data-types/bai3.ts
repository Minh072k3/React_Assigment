// Sử dụng type assertion để fix lỗi
const input = document.getElementById("input") as HTMLInputElement;
const value = input.value; // Giá trị value là number
// const value: number = Number(input.value);