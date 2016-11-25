var model = {
    name : "Мова JavaScript",
    author :"Max",
    questions : [
        {
            id : 1,
            question : "Що виведе цей код?" ,
            task : "alert( +\"Infinity\" );",
            answers : ['Infinity', 'NaN', '0', 'Буде помилка.', 'null'],
            right : 0
        },
        {
            id : 2,
            question : "Чому дорівнює змінна name?" ,
            task : "var name = \"пупкин\".replace(\"п\", \"д\")",
            answers : ['дудкин', 'дупкин', 'пупкин', 'ляпкин-тяпкин', 'У коді помилка.'],
            right : 1
        },
        {
            id : 3,
            question : "Що виведе код нижче?" ,
            task : "var obj = {'1': 0, 1: 1, 0: 2}; alert(obj['1']);",
            answers : ['0', '1', 'У коді помилка.', '2', '1: 1'],
            right : 1
        },
        {
            id : 4,
            question : "Чому дорівнює такий вислів?" ,
            task : "[] + false - null + true",
            answers : ['0', 'NaN', 'undefined', '1', 'null'],
            right : 1
        },
        {
            id : 5,
            question : "Що вийде, якщо скласти true + false?" ,
            task : "",
            answers : ['"truefalse"', '0', '1', 'NaN', 'Буде помилка.'],
            right : 2
        }
    ]


};

