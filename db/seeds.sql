create table home 
(
    id serial primary key,
    name varchar(50),
    address varchar(100),
    city varchar(50),
    state varchar(2),
    zipcode integer
)

insert into home
(name, address, city, state, zipcode)
values ('Young Barry', '202 E Madison', 'Paris', 'IL', 61944),
    ('Tony Stark', '1 Malibu Point', 'Malibu', 'CA', 90264),
    ('Steven Strange', '177a Bleecker Street', 'Greenwich', 'NY', 12834)

delete
from home
where id = $1

alter table home
add image varchar(255)

alter table home
add monthly_mortgage_amount integer

alter table home
add desired_rent integer