//Bài 1 - Tổng 2 số
function calculate(a, b) {
    return a + b;
}

//Bài 2 - Tìm các phần tử chung của 2 array chuyền vào.
function intersection(arr1, arr2) {
    let result = [];
    arr1.sort();
    arr2.sort();
    const size = arr1.length;
    for (let i = 0; i < size; i++) {
        if (arr2.indexOf(arr1[i]) > -1) {
            result.push(arr1[i]);
        }
    }
    return result;
}

//Bài 3 - Group các objects trong array theo một property
function group(cars) {
    let result = [];
    cars.forEach(item => {
        const objBrand = {
            brand: item.brand,
            cars: []
        };
        const index = result.findIndex(curBrand => curBrand.brand === item.brand);
        // console.log('index', index);
        if (index > -1) {
            result[index].cars.push(item);
        } else {
            objBrand.cars.push(item);
            result.push(objBrand);
        }
    });
    // console.log(result);
    return result;
}

//Bài 4 - Hiển thị ngày tiếp theo của ngày truyền vào với định dạng dd/MM/yyyy, vd "28/01/2020"
function getNextDay(day, month, year) {
    // console.log("------")
    // console.log(day + '/' + month + '/' + year);
    const dayOfMonth = [
        {days31: [1, 3, 5, 7, 8, 10, 12]},
        {days30: [4, 6, 9, 11]},
    ]
    let result = 'dd/MM/yyyy';
    let dayAfter = 0;
    let monthAfter = 0;
    let yearAfter = 0;
    if (!isNaN(day)
        && !isNaN(month)
        && !isNaN(year)
        && day > 0
        && month > 0
        && year > 0) {
        let isNamNhuan = (year % 400 === 0);
        if (year % 4 === 0 && year % 100 !== 0) {
            isNamNhuan = true;
        }
        const dayOfFeb = (isNamNhuan) ? 29 : 28;
        if (month === 2) {
            yearAfter = year;
            dayAfter = (day + 1 > dayOfFeb) ? 1 : day + 1;
            monthAfter = (dayAfter === 1) ? 3 : month;
        } else {
            const currDayOfMonth = (dayOfMonth[1].days30.includes(month)) ? 30 : 31;
            dayAfter = (day + 1 > currDayOfMonth) ? 1 : day + 1;
            monthAfter = (dayAfter === 1) ? month + 1 : month;
            yearAfter = (monthAfter > 12) ? year + 1 : year;
            if (yearAfter > year) {
                monthAfter = 1;
            }
        }
        // console.log(dayAfter + '/'+monthAfter + '/'+yearAfter);
        result = `${dayAfter}/${monthAfter}/${yearAfter}`;
    }
    return result;
}

//Bài 5 - Đọc số có tối đa 2 chữ số
function readNumber(number) {
    console.log(number);
    let result = '';
    const hangDonViList = [
        'không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'
    ];
    if (number < 10) {
        result = hangDonViList[number];
    } else {
        const soDonVi = number % 10;
        const soHangChuc = (number - number % 10) / 10;
        console.log("so don vi: ", soDonVi);
        console.log("soHangChuc: ", soHangChuc);
        if (soDonVi === 0) {
            if (soHangChuc > 1) {
                result = `${hangDonViList[soHangChuc]} mươi`;
            } else {
                result = 'mười'
            }
        } else if (soDonVi === 1) {
            if (soHangChuc > 1) {
                result = `${hangDonViList[soHangChuc]} mươi mốt`;
            } else {
                result = `mười ${hangDonViList[soHangChuc]}`;
            }
        } else if (soDonVi === 5) {
            if (soHangChuc > 1) {
                result = `${hangDonViList[soHangChuc]} mươi lăm`;
            } else {
                result = `mười lăm`;
            }
        } else {
            if (soHangChuc > 1) {
                result = `${hangDonViList[soHangChuc]} mươi ${hangDonViList[soHangChuc]}`;
            } else {
                if (soDonVi === 5) {
                    result = `mười `;
                } else {
                    result = `mười ${hangDonViList[soDonVi]}`;
                }

            }
        }
    }
    console.log(result);
    return result;
}

//Bài 6 - Viết hàm đệ quy tạo ra 1 array từ 2 số chuyền vào
function buildArray(startNum, endNum) {
    let result = [startNum];
    if (startNum <= endNum) {
        return startNum;
    } else {
        return buildArray
    }
}

//Bài 7 - Kiểm tra đường đi
function checkPath(arr, a, b) {
}


//TESTING CODES, DUNG DE TEST CAC FUNCTION TREN
//Bai 1
validateResult("1", function () {
    return calculate(3, 4) == 7 && calculate(1, 4) == 5
});

validateResult("2", function () {
    return arraysEqual(intersection([0, 1, 2, 3, 4], [3, 4, 5]), [3, 4]) &&
        arraysEqual(intersection([9], [9, 7]), [9]) &&
        arraysEqual(intersection([], []), []);
})

validateResult("3", function () {
    var cars = [
        {
            name: "Car1",
            price: "1000",
            brand: "Brand1"
        },
        {
            name: "Car2",
            price: "2000",
            brand: "Brand2"
        },
        {
            name: "Car3",
            price: "2100",
            brand: "Brand1"
        },
        {
            name: "Car5",
            price: "3000",
            brand: "Brand2"
        },
        {
            name: "Car7",
            price: "1400",
            brand: "Brand1"
        }
    ]

    var cars2 = [
        {
            name: "Car1",
            price: "1000",
            brand: "Brand2"
        },
        {
            name: "Car2",
            price: "2000",
            brand: "Brand2"
        },
        {
            name: "Car3",
            price: "2100",
            brand: "Brand3"
        },
        {
            name: "Car5",
            price: "3000",
            brand: "Brand2"
        },
        {
            name: "Car7",
            price: "1400",
            brand: "Brand1"
        }
    ]

    var result = group(cars);
    var result2 = group(cars2);
    return result.length == 2 && result[0].cars.length == 3 && result[1].cars.length == 2
        && result2.length == 3 && result2[0].cars.length == 3 && result2[1].cars.length == 1 && result2[2].cars.length == 1;
})

validateResult("4", function () {
    var result = getNextDay(28, 2, 2021);
    var result2 = getNextDay(27, 2, 2021);
    var result3 = getNextDay(31, 12, 2021);
    var result4 = getNextDay(28, 2, 2024);
    return (result == "1/3/2021" || result == "01/03/2021")
        && (result2 == "28/2/2021" || result2 == "28/02/2021")
        && (result3 == "1/1/2022" || result3 == "01/01/2022")
        && (result4 == "29/2/2024" || result4 == "29/02/2024");
})

validateResult("5", function () {
    var result = readNumber(10).trim().toLowerCase();
    var result2 = readNumber(9).trim().toLowerCase();
    var result3 = readNumber(0).trim().toLowerCase();
    var result4 = readNumber(15).trim().toLowerCase();
    var result5 = readNumber(5).trim().toLowerCase();
    var result6 = readNumber(99).trim().toLowerCase();
    var result7 = readNumber(11).trim().toLowerCase();
    var result8 = readNumber(21).trim().toLowerCase();
    console.log(result, result2, result3, result4, result5, result6, result7, result8);
    return result == "mười"
        && result2 == "chín"
        && result3 == "không"
        && result4 == "mười lăm"
        && result5 == "năm"
        && result6 == "chín mươi chín"
        && result7 == "mười một"
        && result8 == "hai mươi mốt"
})


validateResult("6", function () {
    var result = buildArray(1, 5);
    var result2 = buildArray(6, 9);
    var result3 = buildArray(4, 4);
    return arraysEqual(result, [1, 2, 3, 4, 5])
        && arraysEqual(result2, [6, 7, 8, 9])
        && arraysEqual(result3, [4]);
})

validateResult("7", function () {
    var arr = [
        {id: 1, connectedTo: [7, 3]},
        {id: 2, connectedTo: [8, 9]},
        {id: 3, connectedTo: [1, 4]},
        {id: 4, connectedTo: [7, 3]},
        {id: 5, connectedTo: [7]},
        {id: 6, connectedTo: [2]},
        {id: 7, connectedTo: [1, 4, 5]},
        {id: 8, connectedTo: [2, 9]},
        {id: 9, connectedTo: [2, 8]}
    ]
    var result = checkPath(arr, 1, 5);
    //var result2 = checkPath(arr, 2, 8);
    //var result3 = checkPath(arr, 5, 2);
    return result;
})

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function validateResult(resultId, validation) {
    try {
        if (validation()) {
            showResult(resultId, true);
        } else {
            showResult(resultId, false);
        }
    } catch (ex) {
        showResult(resultId, false);
    }
}


function showResult(testNumber, result) {
    if (result) {
        $("#result" + testNumber).text("Thành công ✓").css("color", "green");
    } else {
        $("#result" + testNumber).text("Thất bại ✕").css("color", "red");
    }
}
