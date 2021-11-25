canary : social network like twitter 

user(*id, name, email, password, photo_url, status, date_created)
post(*id, #user_id, content, status, date_created)
comment(*id, #user_id, #post_id, content, status, date_created)
followage(*id, #user_id_follower, #user_id_followed, status, date_created)