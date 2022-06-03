import logo from "../Assets/logo.png";
import "./Styles/Auth.css";
const Auth = () => {
  return (
    <div className="auth">
      <img src={logo} alt="" />
      <svg
        width="297"
        height="219"
        viewBox="0 0 297 219"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M265.144 65.9974C263.473 63.0754 260.096 61.6235 256.748 62.2838L224.368 69.2831L210.962 65.8497L225.376 59.8109C229.419 58.1066 231.268 53.6279 229.564 49.5844C227.859 45.5408 223.25 43.7293 219.337 45.3967L185.548 59.4369L175.801 56.9518L176.46 55.7768C178.53 52.0839 177.165 47.238 173.472 45.1682L172.297 44.5096L179.314 37.3029L215.464 31.6448C219.802 30.9882 222.621 26.943 222.001 22.7354C221.345 18.3968 217.3 15.578 213.092 16.1977L197.645 18.5693L207.289 8.64366L238.562 -2.28476C241.799 -3.33793 243.885 -6.47007 243.786 -9.83469L243.495 -31.9464C243.399 -36.3016 239.898 -39.6977 235.543 -39.6019L213.432 -39.3112C210.03 -39.3427 207.125 -37.1108 206.066 -33.844L196.004 -2.31389L186.36 7.61178L188.343 -7.93108C188.845 -12.1719 185.888 -16.1453 181.611 -16.7782C177.37 -17.2801 173.396 -14.3233 172.764 -10.0456L167.992 26.2143L158.029 36.5126L148.797 31.3381L145.772 20.5985L158.927 -13.4992C160.493 -17.4744 158.511 -22.0049 154.368 -23.6652C150.392 -25.2314 145.862 -23.2486 144.202 -19.1056L138.558 -4.51099L134.906 -17.4771L141.271 -50.0864C141.901 -53.3735 140.381 -56.7622 137.396 -58.3247L117.945 -69.6681C114.252 -71.7379 109.406 -70.373 107.336 -66.6801L96.6643 -46.8525C94.9708 -43.831 95.406 -40.2782 97.6582 -37.8026L119.976 -13.2718L123.701 -0.0437905L111.271 -9.54779C107.823 -12.2522 102.961 -11.4481 100.219 -8.13149C97.646 -4.72084 98.1882 0.215429 101.636 2.91979L130.653 25.1395L133.678 35.8791L128.503 45.1113L114.63 41.5267L91.6356 13.0871C88.9942 9.73161 83.8938 9.18911 80.5751 11.9615C77.2565 14.7339 76.6403 19.5723 79.4495 23.0219L89.2534 35.2448L75.8467 31.8115L50.9392 10.1306C48.331 7.89664 44.6878 7.50914 41.8028 9.31125L22.7897 20.6035C19.0247 22.7948 17.8476 27.6498 20.0021 31.2838L31.2943 50.2969C32.9654 53.2189 36.3429 54.6707 39.691 54.0105L72.0702 47.0112L85.4769 50.4445L71.0627 56.4834C67.0191 58.1877 65.1707 62.6664 66.875 66.7099C68.5793 70.7534 73.058 72.6019 77.1015 70.8976L110.89 56.8574L120.637 59.3424L119.979 60.5175C117.909 64.2103 119.274 69.0563 122.967 71.1261L124.142 71.7847L117.124 78.9914L80.9748 84.6495C76.804 85.4002 73.8174 89.3513 74.4371 93.5589C75.0936 97.8975 79.1388 100.716 83.3465 100.097L98.7935 97.725L89.1494 107.651L57.8769 118.579C54.6395 119.632 52.5531 122.764 52.6526 126.129L52.9433 148.241C53.0391 152.596 56.5401 155.992 60.8953 155.896L83.007 155.606C86.3716 155.506 89.3139 153.405 90.3728 150.138L100.435 118.608L110.079 108.683L108.095 124.225C107.593 128.466 110.55 132.44 114.828 133.072C118.938 133.611 123.042 130.618 123.675 126.34L128.446 90.08L138.41 79.7817L147.642 84.9562L150.667 95.6958L137.511 129.793C135.945 133.769 137.928 138.299 142.071 139.959C146.046 141.526 150.577 139.543 152.237 135.4L157.88 120.805L161.606 134.033L155.372 166.606C154.743 169.893 156.263 173.282 159.247 174.844L178.698 186.187C180.545 187.222 182.731 187.455 184.695 186.901C186.66 186.348 188.272 185.046 189.438 183.163L200.11 163.335C201.803 160.313 201.368 156.761 199.116 154.285L176.799 129.754L173.073 116.526L185.504 126.03C188.914 128.604 193.85 128.061 196.555 124.614C199.128 121.203 198.586 116.267 195.139 113.563L166.121 91.343L163.096 80.6034L168.271 71.3711L182.144 74.9558L205.139 103.395C207.948 106.845 212.88 107.293 216.199 104.521C219.518 101.749 220.134 96.9101 217.325 93.4605L207.521 81.2376L220.928 84.6709L245.966 106.315C248.574 108.549 252.18 108.805 255.102 107.134L274.116 95.8421C277.881 93.6508 279.058 88.7957 276.903 85.1617L265.144 65.9974Z"
          fill="url(#paint0_radial)"
        />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(148.462 58.2555) rotate(74.27) scale(133.651 116.595)"
          >
            <stop stopColor="#302E3E" />
            <stop offset="1" stopColor="#252330" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Auth;
