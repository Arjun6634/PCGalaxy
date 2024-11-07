package com.jeevi.Repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.jeevi.entity.Users;

public interface UserRepository extends JpaRepository<Users, Integer> {

	 Users findByName(String name); 

}
