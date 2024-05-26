'use client'
import React, { useEffect, useState } from "react";
import { useClient } from "next/client";
import styles from "./Users.module.css";
  import { sort } from "fast-sort";

import Link from "next/link";

const Users = ({searchParams}) => {



  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setUsers(users);
    };

    fetchUsers();
  }, []);


 const sortedUsers= sort(users).asc(searchParams.orderby=='name'?users=>users.name:users=>users.email)

 return (
   <>
     {/* <h1>Order By {searchParams.orderby}</h1> */}
     <div className={styles.linkContainer}>
       <Link href="/users?orderby=name">Order by name</Link>
       <Link href="/users?orderby=email">Order by email</Link>
     </div>
     <div className={styles.container}>
       {sortedUsers.map((user) => (
         <div key={user.id} className={styles.userCard}>
           <h2>{user.name}</h2>
           <p>{user.email}</p>
           <p>{user.phone}</p>
           <p>{user.website}</p>
         </div>
       ))}
     </div>
   </>
 );
};

export default Users;
