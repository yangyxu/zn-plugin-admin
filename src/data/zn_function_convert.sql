set global log_bin_trust_function_creators = 1;
----
DROP FUNCTION IF EXISTS zn_plugin_admin_convert_var;
CREATE FUNCTION zn_plugin_admin_convert_var($id int(11))
RETURNS VARCHAR(50)
BEGIN
DECLARE _temp varchar(50);
select zn_title INTO _temp from zn_plugin_admin_var where id=IFNULL($id, 0);
RETURN _temp;
END
----
DROP FUNCTION IF EXISTS zn_plugin_admin_convert_role;
CREATE FUNCTION zn_plugin_admin_convert_role($id int(11))
RETURNS VARCHAR(50)
BEGIN
	DECLARE _temp varchar(50);
	select zn_title INTO _temp from zn_plugin_admin_role where id=IFNULL($id, 0);
	RETURN _temp;
END
----
DROP FUNCTION IF EXISTS zn_plugin_admin_convert_user;
CREATE FUNCTION zn_plugin_admin_convert_user($id int(11))
RETURNS VARCHAR(50)
BEGIN
	DECLARE _temp varchar(50);
	select name INTO _temp from zn_plugin_admin_user where id=IFNULL($id, 0);
	RETURN _temp;
END
----
DROP FUNCTION IF EXISTS zn_plugin_admin_convert_users;
CREATE FUNCTION zn_plugin_admin_convert_users(_ids varchar(250))
RETURNS varchar(1000)
begin
	declare _seeds varchar(1000) default ',';
	declare _seed varchar(100) default '';
	declare _id varchar(10);
	declare _split int;
	declare _len int;
	set _len = char_length(_ids);

  	while _len > 1 do
		set _split = locate(',', _ids, 2);
		set _id = substring(_ids, 2, (_split - 2));
		set _ids = substring(_ids, _split, (_len - _split + 1));
		set _len = char_length(_ids);
		set _seed = '';

		select name into _seed from zn_plugin_admin_user where convert(id, char(10))=IFNULL(_id, '');

		if char_length(_seed)>=1 then
			set _seeds = concat(_seeds, _seed, ',');
		end if;
  	end while;

	return _seeds;
end
----
DROP FUNCTION IF EXISTS zn_plugin_admin_convert_roles;
create function zn_plugin_admin_convert_roles(_ids varchar(250))
returns varchar(1000)
begin
	declare _seeds varchar(1000) default ',';
	declare _seed varchar(100) default '';
	declare _id varchar(10);
	declare _split int;
	declare _len int;
	set _len = char_length(_ids);

		while _len > 1 do
		set _split = locate(',', _ids, 2);
		set _id = substring(_ids, 2, (_split - 2));
		set _ids = substring(_ids, _split, (_len - _split + 1));
		set _len = char_length(_ids);
		set _seed = '';

		select zn_title into _seed from zn_plugin_admin_role where convert(id, char(10))=IFNULL(_id, '');

		if char_length(_seed)>=1 then
			set _seeds = concat(_seeds, _seed, ',');
		end if;
		end while;

	return _seeds;
end
----
DROP FUNCTION IF EXISTS zn_plugin_admin_convert_vars;
create function zn_plugin_admin_convert_vars(_ids varchar(250))
returns varchar(1000)
begin
	declare _seeds varchar(1000) default ',';
	declare _seed varchar(100) default '';
	declare _id varchar(10);
	declare _split int;
	declare _len int;
	set _len = char_length(_ids);

		while _len > 1 do
		set _split = locate(',', _ids, 2);
		set _id = substring(_ids, 2, (_split - 2));
		set _ids = substring(_ids, _split, (_len - _split + 1));
		set _len = char_length(_ids);
		set _seed = '';

		select zn_title into _seed from zn_plugin_admin_var where convert(id, char(10))=IFNULL(_id, '');

		if char_length(_seed)>=1 then
			set _seeds = concat(_seeds, _seed, ',');
		end if;
		end while;

	return _seeds;
end
----
DROP FUNCTION IF EXISTS zn_plugin_admin_user_exist;
create function zn_plugin_admin_user_exist($userId int, $users varchar(250), $roles varchar(250))
returns int
begin
	declare _index int default 0;
	declare _split int default 0;
	declare _roleId int default 0;
	declare _len int default 0;
	set _index = locate($userId, $users);
	if _index > 0 then
		return _index;
	else
		set _len = char_length($roles);
		while _len > 1 do
			set _split = locate(',', $roles, 2);
			set _roleId = substring($roles, 2, (_split - 2));
			set $roles = substring($roles, _split, (_len - _split + 1));
			set _len = char_length($roles);
			if char_length(_roleId)>0 then
				set _index = 0;
				select id into _index from zn_plugin_admin_user where locate(concat(',',_roleId,','), role_ids)>0 and convert(id, char(10))=IFNULL($userId, '');
				if _index>0 then
					return _index;
				end if;
			end if;
		end while;
	end if;

	return _index;
end
