//Định nghĩa 1 interface, được sử dụng để định dạng cấu trúc của 1 object.
//Interface ở đây có tên là Hero, có 1 property là name với kiểu dữ liệu là string.
export interface Hero {
    name: string;
}

// Mảng các Hero interface được khai báo ở trên. Mỗi object ở đây là 1 instance.
export const HEROES = [
    { name: 'Ironman' },
    { name: 'Spiderman' },
    { name: 'DR.Strange' },
    { name: 'Thor' },
];