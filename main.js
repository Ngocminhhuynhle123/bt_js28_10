

document.getElementById("btn_1").onclick = function () {
    // đầu vào tên thu nhập trong 1 năm  số người phụ thuộc
    var ten1 = document.getElementById("ten1").value;
    var thuNhap1 = document.getElementById("thuNhap1").value * 1;
    var soNguoiPhuThuoc1 = document.getElementById("soNguoiPhuThuoc1").value * 1;
    // đầu ra tạo 2 biến để lưu kết qủa và in ra màn hình tạo 9 hàm hàm 1 đê tính tiền chịu thuế 8 hàm để tính tiền thuế theo từng giai đoạn
    // dùng if else theo từng trường hợp rồi cộng dồn lên theo từng gia đoạn
    var ketqua1 ="";
    var rerult = "";
    var thuNhapChiuThue = thuNhapthue(thuNhap1, soNguoiPhuThuoc1);
    if (thuNhap1 == 0) {
        ketqua1 = "<h2>Vui lòng nhập tổng thu nhập năm</h2>"
    }
    else if (thuNhapChiuThue<0) {
        ketqua1 = "<h2>Không thể tính toán</h2>"

    }
    else {
        if (thuNhapChiuThue > 0 && thuNhapChiuThue < 60) {
            rerult = thue0_60(thuNhapChiuThue);
        }
        else if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
            rerult = thue0_60(thuNhapChiuThue) + thue60_120(thuNhapChiuThue);
        }
        else if (thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) {
            rerult = thue0_60(thuNhapChiuThue) + thue60_120(thuNhapChiuThue) + thue120_210(thuNhapChiuThue);
        }
        else if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
            rerult = thue0_60(thuNhapChiuThue) + thue60_120(thuNhapChiuThue) + thue120_210(thuNhapChiuThue) + thue210_384(thuNhapChiuThue);

        }
        else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
            rerult = thue0_60(thuNhapChiuThue) + thue60_120(thuNhapChiuThue) + thue120_210(thuNhapChiuThue) + thue210_384(thuNhapChiuThue) + thue384_624(thuNhapChiuThue);

        }
        else if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
            rerult = thue0_60(thuNhapChiuThue) + thue60_120(thuNhapChiuThue) + thue120_210(thuNhapChiuThue) + thue210_384(thuNhapChiuThue) + thue384_624(thuNhapChiuThue) + thue624_960(thuNhapChiuThue);
        }
        else {
            rerult = thue0_60(thuNhapChiuThue) + thue60_120(thuNhapChiuThue) + thue120_210(thuNhapChiuThue) + thue210_384(thuNhapChiuThue) + thue384_624(thuNhapChiuThue) + thue624_960(thuNhapChiuThue)+thue960_(thuNhapChiuThue) ;
        }
        rerult*=10000000
        ketqua1+="<h2>"
        ketqua1+="tên: "+ten1;
        ketqua1+="<br>";
        ketqua1+=" Tiền thuế cần trả: "+ new Intl.NumberFormat('de-DE').format(rerult);
        ketqua1+="</h2>"
    }
//  đầu ra tên và số tiền thuế cần trả
    document.getElementById("ketqua1").innerHTML=ketqua1;
};


function thuNhapthue(thuNhap1, soNguoiPhuThuoc1) {
    var rerult;
    rerult = thuNhap1 - 4 - soNguoiPhuThuoc1 * 1.6;
    return rerult;
}
// 
function thue0_60(thuNhapChiuThue) {
    var rerult;
    if (thuNhapChiuThue > 0 && thuNhapChiuThue < 60) {
        rerult = 5 * thuNhapChiuThue / 100;
    } else {
        rerult = 5 * 60 / 100;
    }
    return rerult;
}
function thue60_120(thuNhapChiuThue) {
    var rerult;
    if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
        rerult = 10 * (thuNhapChiuThue - 60) / 100;
    } else {
        rerult = 10 * 60 / 100;
    }
    return rerult;
}
function thue120_210(thuNhapChiuThue) {
    var rerult;
    if (thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) {
        rerult = 15 * (thuNhapChiuThue - 120) / 100;
    } else {
        rerult = 10 * 90 / 100;
    }
    return rerult;
}
function thue210_384(thuNhapChiuThue) {
    var rerult;
    if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
        rerult = 20 * (thuNhapChiuThue - 210) / 100;
    } else {
        rerult = 10 * 174 / 100;
    }
    return rerult;
}
function thue384_624(thuNhapChiuThue) {
    var rerult;
    if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
        rerult = 25 * (thuNhapChiuThue - 384) / 100;
    } else {
        rerult = 10 * 240 / 100;
    }
    return rerult;
}
function thue624_960(thuNhapChiuThue) {
    var rerult;
    if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
        rerult = 30 * (thuNhapChiuThue - 624) / 100;
    } else {
        rerult = 10 * 336 / 100;
    }
    return rerult;
}
function thue960_(thuNhapChiuThue) {
    var rerult;
    rerult = 35 * (thuNhapChiuThue - 960) / 100;
    return rerult;
}