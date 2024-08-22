import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
    state: () => ({
        count: 0,
        name: "test",
        age: 18,
        isAdmin: false,
        isLogin: false,
        isShow: false,
        // 复杂对象
        userInfo: {
            name: "test",
            age: 18,
        },
        // 复杂对象数组
        userList: [
            {
                name: "test",
                age: 18,
            },
            {
                name: "test",
                age: 18,
            },
        ]
    }),
});