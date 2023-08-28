// Component cha và component con chia sẻ chung 1 service cho phép giao tiếp 2 chiều.
// Phạm vi của services này là component cha và component con, các component bên ngoài cây không có quyền truy cập.


import { Injectable } from '@angular/core';
// Subject là 1 loại Observable được cung cấp bởi rxjs, được thiết kế để liên lạc giữa các component.
import { Subject } from 'rxjs';

@Injectable() // Đánh dấu class MissionService, cho phép đưa MissionService instance vào các component 
// hoặc service khác bằng cách chỉ định nó làm phần phụ thuộc. 
export class MissionService {

    // Khai báo chuỗi observables
    // Các instance của lớp Subject từ rxjs, được sử dụng để tạo ra các observables phục vụ việc announced 
    // và confirmed mission.
    private missionAnnouncedSource = new Subject<string>();
    private missionConfirmedSource = new Subject<string>();

    // Luồng chuỗi Observable
    // Là các props public, dùng để hiển thị các observables dựa trên các Subject instanve tương ứng.
    // asObservable(): chỉ cho phép subscribe nhưng không cho phép gọi trực tiếp các phương thức của nó.
    missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    missionConfirmed$ = this.missionConfirmedSource.asObservable();

    // Service message commands
    // Component gọi hàm này để thông báo cho các component khác về 1 mission mới, 
    // và các component khác có thể đăng ký missionAnnounced$ Observable để nhận thông báo.
    announceMission(mission: string) {
        this.missionAnnouncedSource.next(mission);
    }

    // Component gọi hàm này để xác nhận sự tham gia của astronaut, 
    // và các component khác có thể đăng ký missionConfirmed$ Observable để nhận xác nhận.
    confirmMission(astronaut: string) {
        this.missionConfirmedSource.next(astronaut);
    }
}