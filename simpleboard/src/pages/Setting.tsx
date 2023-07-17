import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import profileImage from "../assets/bg1.jpg";

type Profile = {
  name: string;
  contact: string;
  email: string;
  image?: string;
  // 추가 프로필 정보에 대한 타입 정의
};
const defaultProfileImage = profileImage; // 기본 이미지 파일 경로

function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetchProfileData(); // 프로필 데이터를 가져오는 함수 호출
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get<Profile>(
        "http://localhost:8080/api/getProfile?id=" + 1
      ); // 프로필 데이터를 가져오는 API 호출
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

  return (
    <div className="container">
      <h3>Profile page</h3>
      <div>
        <div className="row">
          <div className="col">
            <h5>Name:</h5>
            <p>{profile.name}</p>
          </div>
          <div className="col">
            <h5>Contact:</h5>
            <p>{profile.contact}</p>
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
            <h5>Email:</h5>
            <p>{profile.email}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ProfilePage;
