# Лабораторная работа №1

###### Выполнил: Орешкин М.А., АИБ-3-044

Цель работы: научиться пользоваться командной строкой **GitBash** и утилитой **Curl**, а так же расширением **Markdown**.

> Использование команды с опцией **verbose**:
>
>> ```shell
>> curl -v rgups.ru
>> ```
> Результат исполнения:
>> ```shell
>> * processing: rgups.ru
>>   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
>>                                  Dload  Upload   Total   Spent    Left  Speed
>>   0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 80.72.224.90:80...
>> * Connected to rgups.ru (80.72.224.90) port 80
>> > GET / HTTP/1.1
>> > Host: rgups.ru
>> > User-Agent: curl/8.2.1
>> > Accept: */*
>> >
>> < HTTP/1.1 301 Moved Permanently
>> < Server: nginx/1.19.1
>> < Date: Sun, 17 Sep 2023 20:46:11 GMT
>> < Content-Type: text/html
>> < Content-Length: 169
>> < Connection: keep-alive
>> < Location: https://rgups.ru/
>> <
>> { [169 bytes data]
>> 100   169  100   169    0     0  15973      0 --:--:-- --:--:-- --:--:-- 18777<html>
>> <head><title>301 Moved Permanently</title></head>
>> <body>
>> <center><h1>301 Moved Permanently</h1></center>
>> <hr><center>nginx/1.19.1</center>
>> </body>
>> </html>
>>
>> * Connection #0 to host rgups.ru left intact
>> ```