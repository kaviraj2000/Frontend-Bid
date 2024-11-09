import { Component } from 'react';
import Api from './Api';
class Listing extends Component {

    async Login(data) {
        return Api.post("/user/login", data);
    }

    async SubLogin(data) {
        return Api.post("/user/Sublogin", data);
    }
    async Profile() {
        return Api.get("/user",)
    }


    async Dashboard() {
        return Api.get("/api/user-stats",)
    }

    async WidthrawalList() {
        return Api.get("/payment/widtrawalpament",)
    }

    async userList() {
        return Api.get("/user/list",)
    }

    async userListId(id) {
        return Api.get(`/user/userlist/${id}`)
    }


    async userListStatus() {
        return Api.get("/user/list/status")
    }

    async userStatus(data) {
        return Api.post("/user/update-status", data)
    }

    async userDelete(data) {
        return Api.post("/user/delete", data)
    }

    async userProfile(data) {
        return Api.post("/user/profile", data)
    }

    async userProfiledata(data) {
        return Api.get("/user/setting", data)
    }

    async WidthrawalAmount() {
        return Api.get("/payment/widtrawalreq")
    }

    async userSubAdmin() {
        return Api.get("/user/subadmin",)
    }




    async userwithdrawal(data) {
        return Api.post("/payment/withdrawal/data", data)
    }

    async usersuccess(data) {
        return Api.post("/payment/success/data", data)
    }

    async marketAdd(data) {
        return Api.post("/market/marketadd", data)
    }
    async marketlist() {
        return Api.get("/market/marketlist")
    }
    async marketlistupdate() {
        return Api.get("/market/marketlistupdate")
    }
    async marketEdit(data) {
        return Api.post("/market/marketupdatedata", data)
    }
    async marketDelete(data) {
        return Api.post("/market/marketdelete", data)
    }
    async GameRate(data) {
        return Api.post("/panna/gamerate", data)
    }

    async BidHistory() {
        return Api.get("/panna/bid-history")
    }

    async ResultRate(data) {
        return Api.post("/result/resultadd", data)
    }

    async ResultGet() {
        return Api.get("/result/resultget",)
    }


    async Subscriptionlist() {
        return Api.get("/get-subscription-list")
    }

    async Scheduledate(data) {
        return Api.post("/create-story", data)
    }

    async Reschedule(id, data) {
        return Api.post(`/reschedule-story/${id}`, data)
    }
    async Static() {
        return Api.get("/statistics")
    }

    async StoryCard(type, query, page) {
        return Api.get(`/story-list/${type}?${query}&page=${page}`,)
    }

    async Storydetilas(uuid) {
        return Api.get(`/story-detail/${uuid}`)
    }

    async storydelete(uuid) {
        return Api.get(`/delete-story/${uuid}`)
    }
    async storyreshedule(uuid, data) {
        return Api.post(`/reschedule-story/${uuid}`, data)
    }
    async saveimage(data) {
        return Api.post(`/save-image`, data)
    }

    async getdetilas() {
        return Api.get("/get-detail")
    }


    async fetchKey() {
        return Api.get("/fetch-api-key")
    }


    async StoryLogout() {
        return Api.get("/admin-logout")
    }

    async getchart() {
        return Api.get("/get-data-bymonth")
    }

    async forget(data) {
        return Api.post("/forgot-password-admin", data)
    }

    async forgetopt(data) {
        return Api.post("/verify-reset-password-otp", data)
    }

    async forgetpass(data) {
        return Api.post("/reset-password", data)
    }

    async update_ai_keys(data) {
        return Api.post(`/update-key`, data)
    }


    render() {
        return (
            <div>
                <>

                </>
            </div>
        )
    }
}

export default Listing;