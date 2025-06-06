const questions = [
  {
    question: "1. Tôi cảm thấy những cuộc gặp gỡ trực tiếp giúp xây dựng mối quan hệ tình cảm tốt hơn so với qua môi trường trực tuyến.",
    answers: [
      { text: "Rất đồng ý", value: 5 },
      { text: "Đồng ý", value: 4 },
      { text: "Trung lập", value: 3 },
      { text: "Không đồng ý", value: 2 },
      { text: "Rất không đồng ý", value: 1 }
    ]
  },
  {
    question: "2. Tôi tin rằng cảm xúc thường chỉ thật sự hình thành sau khi có cơ hội gặp gỡ và trò chuyện ngoài đời.",
    answers: [
      { text: "Rất đồng ý", value: 5 },
      { text: "Đồng ý", value: 4 },
      { text: "Trung lập", value: 3 },
      { text: "Không đồng ý", value: 2 },
      { text: "Rất không đồng ý", value: 1 }
    ]
  },
  {
    question: "3. Tôi cảm thấy tự nhiên khi là người chủ động bắt chuyện với người mình có cảm tình.",
    answers: [
      { text: "Rất đồng ý", value: 5 },
      { text: "Đồng ý", value: 4 },
      { text: "Trung lập", value: 3 },
      { text: "Không đồng ý", value: 2 },
      { text: "Rất không đồng ý", value: 1 }
    ]
  },
  {
    question: "4. Tôi tin rằng một mối quan hệ tình cảm bền vững cần có thời gian tìm hiểu kỹ lưỡng.",
    answers: [
      { text: "Rất đồng ý", value: 5 },
      { text: "Đồng ý", value: 4 },
      { text: "Trung lập", value: 3 },
      { text: "Không đồng ý", value: 2 },
      { text: "Rất không đồng ý", value: 1 }
    ]
  },
  {
    question: "5. Tôi thấy những cuộc trò chuyện mặt đối mặt giúp hiểu nhau sâu sắc hơn so với các hình thức giao tiếp khác.",
    answers: [
      { text: "Rất đồng ý", value: 5 },
      { text: "Đồng ý", value: 4 },
      { text: "Trung lập", value: 3 },
      { text: "Không đồng ý", value: 2 },
      { text: "Rất không đồng ý", value: 1 }
    ]
  },
  {
    question: "6. Tôi cho rằng chuyện tình cảm nên giữ trong phạm vi riêng tư giữa hai người và những người thân thiết.",
    answers: [
      { text: "Rất đồng ý", value: 5 },
      { text: "Đồng ý", value: 4 },
      { text: "Trung lập", value: 3 },
      { text: "Không đồng ý", value: 2 },
      { text: "Rất không đồng ý", value: 1 }
    ]
  },
  {
    question: "7. Tôi chỉ thể hiện cảm xúc khi cảm thấy thực sự tin tưởng vào đối phương và mối quan hệ.",
    answers: [
      { text: "Rất đồng ý", value: 5 },
      { text: "Đồng ý", value: 4 },
      { text: "Trung lập", value: 3 },
      { text: "Không đồng ý", value: 2 },
      { text: "Rất không đồng ý", value: 1 }
    ]
  },
  {
    question: "8. Tôi không cảm thấy thoải mái khi bước vào một mối quan hệ mà chưa có định hướng rõ ràng cho tương lai.",
    answers: [
      { text: "Rất đồng ý", value: 5 },
      { text: "Đồng ý", value: 4 },
      { text: "Trung lập", value: 3 },
      { text: "Không đồng ý", value: 2 },
      { text: "Rất không đồng ý", value: 1 }
    ]
  },
  {
    question: "9. Tôi nghĩ rằng tình yêu ở tuổi sinh viên vẫn cần được xây dựng trên sự chín chắn và nghiêm túc.",
    answers: [
      { text: "Rất đồng ý", value: 5 },
      { text: "Đồng ý", value: 4 },
      { text: "Trung lập", value: 3 },
      { text: "Không đồng ý", value: 2 },
      { text: "Rất không đồng ý", value: 1 }
    ]
  },
  {
    question: "10. Tôi trân trọng sự riêng tư trong tình yêu và không thích chia sẻ quá nhiều với người ngoài.",
    answers: [
      { text: "Rất đồng ý", value: 5 },
      { text: "Đồng ý", value: 4 },
      { text: "Trung lập", value: 3 },
      { text: "Không đồng ý", value: 2 },
      { text: "Rất không đồng ý", value: 1 }
    ]
  },
  {
    question: "11. Tôi tin rằng trong tình yêu, cả hai vẫn cần có không gian riêng để phát triển bản thân.",
    answers: [
      { text: "Rất đồng ý", value: 5 },
      { text: "Đồng ý", value: 4 },
      { text: "Trung lập", value: 3 },
      { text: "Không đồng ý", value: 2 },
      { text: "Rất không đồng ý", value: 1 }
    ]
  },
  {
    question: "12. Tôi tin vào việc quan sát và lắng nghe người yêu trực tiếp hơn là tìm hiểu thông qua nguồn thông tin bên ngoài.",
    answers: [
      { text: "Rất đồng ý", value: 5 },
      { text: "Đồng ý", value: 4 },
      { text: "Trung lập", value: 3 },
      { text: "Không đồng ý", value: 2 },
      { text: "Rất không đồng ý", value: 1 }
    ]
  }
];

export default questions;