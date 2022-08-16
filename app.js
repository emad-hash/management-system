function Employee(id, name, dep, level,salary, img) {
    this.id = id;
    this.fullName = name;
    this.dep = dep;
    this.level = level;
    this.img = img;
    this.salary = salary(level);
    function salary(level) {
        switch (level) {
            case "Junior":
                return Math.round(Math.random() * 500 + 500);
                break;
            case "Mid-Senior":
                return Math.round(Math.random() * 500 + 1000);
                break;
            case "Senior":
                return Math.round(Math.random() * 500 + 1500);
                break;
        }
    }
    this.print = function () {
        return `Hello ${this.fullName} your salary is ${this.salary} `;
    }
}

let employes = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior"),
    new Employee(1001, "Lana Ali", "Finance", "Senior"),
    new Employee(1002, "Tamara Ayoub ", "Marketing", "Senior"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior"),
    new Employee(1004, "Omar Zaid", "Development", "Senior"),
    new Employee(1005, "Rana Saleh", "Development", "Junior"),
    new Employee(1006, "Ghazi Samer", "Finance", "Mid-Senior"),
]

for (let i = 0; i < employes.length; i++) {
    console.log(employes[i].print());
}

let main = document.querySelector("main");

let table = document.createElement("table");

main.prepend(table);
const thead = document.createElement("thead");

let  th0 = document.createElement("th");
th0.textContent = "ID";
thead.append(th0);

let  th1 = document.createElement("th");
th1.textContent = "Full Name";
thead.append(th1);

let  th2 = document.createElement("th");
th2.textContent = "Department";
thead.append(th2);

let  th3 = document.createElement("th");
th3.textContent = "level";
thead.append(th3);

let  th4 = document.createElement("th");
th4.textContent = "salary";
thead.append(th4);
table.prepend(thead);

const em1 =   new Employee(1000, "Ghazi Samer", "Administration", "Senior");
render(em1.id,em1.fullName,em1.dep,em1.level,em1.salary);

const em2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
render(em2.id,em2.fullName,em2.dep,em2.level,em2.salary);

const em3 =new Employee(1002, "Tamara Ayoub ", "Marketing", "Senior");
render(em3.id,em3.fullName,em3.dep,em3.level,em3.salary);

const em4 =new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
render(em4.id,em4.fullName,em4.dep,em4.level,em4.salary);

const em5 =new Employee(1004, "Omar Zaid", "Development", "Senior");
render(em5.id,em5.fullName,em5.dep,em5.level,em5.salary);

const em6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
render(em6.id,em6.fullName,em6.dep,em6.level,em6.salary);

const em7 =  new Employee(1006, "Ghazi Samer", "Finance", "Mid-Senior");
render(em7.id,em7.fullName,em7.dep,em7.level,em7.salary);

function render(...rows) {
    let tr = document.createElement("tr");
    for (const row of rows){
        const td = document.createElement("td");
        td.textContent = row ;
        tr.append(td);
    }
    table.append(tr);
}