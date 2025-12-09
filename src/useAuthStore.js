// import instance from "@/lib/axios";
// export const authServices = {
//   login: async (email,password) => {
//     instance.post("/auth/login", {email,password});
//   },
//   logout: async () => {

//   },
//   register: async (data) => {
//     instance.post("/", data);
//   },
//   getProfile: async () => {
//     instance.get("/auth/profile")
//     Headers:{
//         'Authorization':Bearer ${localStorage.getItem('accsess_token')}
//     }
//   }};
// create((set) => ({
//   user: null,
//   isAuthenticated: false,
//   loading: false,
//   error: null,
//   login:async(email,password)=>{
//     set({loading:true,error:null});
//     try{
//         const {accsess_token,refresh_token}=await authServices.login(email,password)
//         localStorage.setItem("accsess_token",accsess_token);
//         localStorage.setItem("refresh_token",refresh_token);
//         const user=await authServices.getProfile();
//         set({
//             user:user,
//             isAuthenticated:true,
//             loading:false
//         });
//     }

//   }
// }));
