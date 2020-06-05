create table users (
    id serial primary key,
    username varchar(20),
    password varchar(20),
    profile_pic text
);

create table posts (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id int references users(id)
);

--alter table users
 --   alter column password type text;

    insert into users (
    username,
    password,
    profile_pic
) values (
    'homeboi_24',
    '12345678',
    'https://vignette.wikia.nocookie.net/derp-cat/images/7/78/Spooderman.jpg/revision/latest?cb=20181007162659'
),
(
    'womanizer23',
    '1234567',
    'https://i.ytimg.com/vi/XVPZ9A0POY8/maxresdefault.jpg'
),
(
    'flightofhand46',
    '123456',
    'https://i.redd.it/rudob6riq0v41.jpg'
);