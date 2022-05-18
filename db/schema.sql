
create table if not exists Category( 
	id	int primary key auto_increment,
    category_name  varchar(30) NOT NULL
);

create table if not exists Product(
	id int primary key auto_increment,
	product_name  varchar(30) NOT NULL,
    price  decimal NOT NULL, 
    stock  int NOT NULL,
    category_id int
);

create table if not exists Tag(
	id  int primary key auto_increment NOT NULL,
    tag_name varchar(30)
);

create table if not exists ProductTag(
	id  int primary key auto_increment NOT NULL,
    product_id varchar(30),
    tag_id int 
);