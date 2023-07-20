import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import profileImage from "../assets/bg1.jpg";
import { User } from "../types";


const defaultProfileImage = profileImage; // 기본 이미지 파일 경로
const baseURL = "http://localhost:8080/api/";

function ProfilePage() {
  const [profile, setProfile] = useState<User | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetchProfileData(); // 프로필 데이터를 가져오는 함수 호출
  }, []);

  const who = "Sarah Jay"; // for testing
  const fetchProfileData = async () => {
    try {
      const response = await axios.get<User>(
        baseURL + "getAnyUser?name=" + who
      ); // 프로필 데이터를 가져오는 API 호출
      console.log(response.data);
      setProfile(response.data); // 가져온 데이터를 상태로 설정
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  if (!profile) {
    return <div>Loading profile...</div>;
  }
  //const profileImage = profile.image || defaultProfileImage; // 유저 이미지 또는 기본 이미지 선택
  const profileImage = defaultProfileImage; // 유저 이미지 또는 기본 이미지 선택
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="container">
      <h3>Profile page</h3>
      <br/>
      <div>
        <div className="row">
          <div className="col">
            <h5>Name</h5>
            <p>{profile.name}</p>
          </div>
          <div className="col">
            <h5>UUID</h5>
            <p>{profile.uuid}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src={profileImage}
              alt="user"
              style={{ width: 100, height: 100 }}
            />
          </div>
          <div className="col">
            <h5>Email</h5>
            <p>{profile.email}</p>
            <h5>Password</h5>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={profile.password}
              readOnly
              onClick={toggleShowPassword}
            />
            
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ProfilePage;
