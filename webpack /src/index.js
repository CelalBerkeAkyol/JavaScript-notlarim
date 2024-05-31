import { Person } from "./app1";
import { Employee } from "./app2";

Person.Test();
Employee.Test();
console.log("Değişiklik yaptığımız anda webpack otomatik olarak değişecek");
// bu değişiklikler web yenilenmeden gelmiyor. Fakat ajax ile yaptığımız http requestler geliyor aklında bulunsun 