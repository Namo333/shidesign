import React from 'react'

import WhiteCoding from '../assets/img/whitecode.png'
import Shidesign from '../assets/img/shidesign.png'

const Footer = () => (
  <footer className='flex justify-between items-center py-[80px] max-lg:flex-col-reverse gap-[42px]'>
    <div className="flex flex-col gap-[24px] max-lg:text-center">
      <p className='text-black text-xl font-normal leading-relaxed'>
        Дизайн — Дмитрий Зверьков<br></br>
        Программирование — namo :(
      </p>
      <p className='text-black text-xl font-normal leading-normal'>
        © 2023 Шизайн. Все права защищены
      </p>
    </div>

    <div className="flex items-center justify-between 2xl:gap-[309px] xl:gap-[179px] gap-[20px] max-sm:flex-col">
      <div className="flex justify-center items-center gap-[48px]">
        <a href="https://t.me/shizign" className="w-[104px] h-[104px] rounded-[100px] flex justify-center items-center">
          <img className="rounded-[100px]" src={ Shidesign } />
        </a>

        <a href="https://t.me/whiteCodin" className="w-[104px] h-[104px] rounded-[100px] flex justify-center items-center">
          <img className="rounded-[100px]" src={ WhiteCoding } />
        </a>
      </div>

      <div className="">
        <svg width="256" height="77" viewBox="0 0 256 77" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.5617 18.215C38.5617 14.075 36.5707 10.833 30.7404 10.833H10.7028V35.7409H16.2605V26.9779H29.092C31.9734 26.9779 32.7288 27.8054 32.7288 30.7029V35.7409H38.2865V29.8076C38.2865 26.8477 37.2424 25.1114 34.9222 24.52C37.3342 23.7007 38.559 21.3539 38.559 18.215H38.5617ZM29.985 21.7337H16.2632V16.0772H29.985C32.0435 16.0772 33.004 17.1813 33.004 18.8363C33.004 20.4912 32.1811 21.7337 29.985 21.7337ZM253.531 41.2591H255.59V66.167H250.032V48.5028L238.574 66.167H232.193V41.2591H237.751V58.3048L246.123 45.2608C248.249 41.9482 250.102 41.2591 253.534 41.2591H253.531ZM145.052 35.7382V30.4262C147.316 30.4262 147.866 29.0452 148.347 24.4223L149.857 10.8302H169.755V35.7382H164.197V16.0744H154.614L153.632 25.597C152.809 33.8065 150.613 36.0149 145.055 35.7409L145.052 35.7382ZM0 77H48.9893V0H0V77ZM5.35003 5.37985H43.6393V71.6174H5.35003V5.37985ZM32.7261 41.2591H38.2839V66.167H20.5152C13.3791 66.167 10.7028 63.4758 10.7028 56.2999V41.2591H16.2605V56.4383C16.2605 59.6125 17.4962 60.9228 20.3776 60.9228H32.7288V41.2591H32.7261ZM180.522 27.3903H192.803V35.7382H198.361V10.8302H184.089C177.09 10.8302 174.962 12.7619 174.962 20.0056V35.7382H180.52V27.3903H180.522ZM184.089 16.0744H192.803V22.2139H180.522V20.0056C180.522 17.1759 180.865 16.0717 184.089 16.0717V16.0744ZM117.806 26.5629V20.0083C117.806 12.8324 119.797 10.833 126.93 10.833H141.478V16.0772H126.658C123.776 16.0772 123.364 16.5601 123.364 19.7343V20.5617H137.431V25.7354H123.364V26.8396C123.364 30.0138 123.776 30.4967 126.658 30.4967H141.685V35.7409H126.933C119.797 35.7409 117.809 33.6709 117.809 26.5656L117.806 26.5629ZM246.87 10.8302H240.765C233.696 10.8302 231.64 12.8324 231.64 20.0056V26.5601C231.64 33.6682 234.384 35.7355 241.453 35.7355H246.188C253.324 35.7355 256 33.6655 256 26.5601V20.0056C256 12.8297 254.009 10.8302 246.876 10.8302H246.87ZM250.437 26.5629C250.437 29.7371 249.752 30.4967 246.87 30.4967H240.765C237.883 30.4967 237.198 29.7371 237.198 26.5629V20.0083C237.198 16.8341 237.883 16.0744 240.765 16.0744H246.87C249.752 16.0744 250.437 16.8341 250.437 20.0083V26.5629ZM155.267 41.2591H170.499V44.3628C170.499 46.8479 170.294 48.9179 169.744 50.779H165.009V46.5006H155.267C152.385 46.5006 151.7 47.2602 151.7 50.4344V56.989C151.7 60.1632 152.385 60.9228 155.267 60.9228H170.499V66.167H155.267C148.198 66.167 146.142 64.097 146.142 56.9917V50.4371C146.142 43.2613 148.201 41.2618 155.267 41.2618V41.2591ZM111.568 10.8302H91.3255L90.0898 23.4565C89.472 29.4603 88.579 30.4262 86.9332 30.4262H86.5906V38.0849H91.8732L92.0782 34.9107H108.409L108.614 38.0849H113.896V30.3583H111.563V10.8302H111.568ZM96.2115 16.0744H106.01V29.7371H94.1232C94.8841 28.4023 95.2024 26.5412 95.4452 24.1483L96.2115 16.0744ZM133.114 41.2591H126.528C119.46 41.2591 117.404 43.2613 117.404 50.4344V56.989C117.404 64.097 119.462 66.1643 126.528 66.1643H133.114C140.25 66.1643 142.238 64.0943 142.238 56.989V50.4344C142.238 43.2586 140.247 41.2591 133.114 41.2591ZM136.681 56.9917C136.681 60.1659 135.995 60.9255 133.114 60.9255H126.528C123.647 60.9255 122.962 60.1659 122.962 56.9917V50.4371C122.962 47.2629 123.647 46.5033 126.528 46.5033H133.114C135.995 46.5033 136.681 47.2629 136.681 50.4371V56.9917ZM183.544 41.2591H198.844V44.3628C198.844 46.8479 198.639 48.9179 198.089 50.779H193.354V46.5006H183.541C180.66 46.5006 179.975 47.2602 179.975 50.4344V56.989C179.975 60.1632 180.66 60.9228 183.541 60.9228H198.841V66.167H183.541C176.473 66.167 174.417 64.097 174.417 56.9917V50.4371C174.417 43.2613 176.475 41.2618 183.541 41.2618L183.544 41.2591ZM79.5408 53.0036C80.844 52.2033 81.9258 50.505 81.9258 47.8815C81.9258 44.5011 80.0049 41.2591 74.3095 41.2591H59.7622V66.167H74.8572C80.3475 66.167 83.0212 63.3374 83.0212 58.7145C83.0212 55.6054 81.2459 53.7741 79.5381 53.0036H79.5408ZM76.3681 48.709C76.3681 50.2282 75.6126 51.0557 73.6917 51.0557H65.32V46.5711H73.6917C75.6126 46.5711 76.3681 47.2602 76.3681 48.709ZM74.9274 60.9228H65.32V56.0937H74.9274C76.7808 56.0937 77.4661 56.9917 77.4661 58.4405C77.4661 59.8892 76.7808 60.9255 74.9274 60.9255V60.9228ZM221.42 10.8302H226.978V35.7382H221.42V25.7327H209.139V35.7382H203.582V10.8302H209.139V20.4912H221.42V10.8302ZM68.0665 10.8302H83.2316V13.9339C83.2316 16.419 83.0266 18.489 82.4762 20.3501H77.7413V16.0717H68.0665C65.1851 16.0717 64.4998 16.8314 64.4998 20.0056V26.5601C64.4998 29.7343 65.1851 30.494 68.0665 30.494H83.2316V35.7382H68.0665C60.9979 35.7382 58.942 33.6682 58.942 26.5629V20.0083C58.942 12.8324 61.0006 10.833 68.0665 10.833V10.8302ZM224.92 41.2591H226.978V66.167H221.42V48.5028L209.962 66.167H203.582V41.2591H209.139V58.3048L217.511 45.2608C219.637 41.9482 221.491 41.2591 224.922 41.2591H224.92ZM105.322 41.2591H89.1294V46.1588L92.0108 46.5738V66.1698H97.5685V59.7535H105.322C111.703 59.7535 113.899 56.5115 113.899 51.4735V49.5419C113.899 44.7806 111.841 41.2618 105.322 41.2618V41.2591ZM108.409 51.2646C108.409 53.6113 107.516 54.5066 105.322 54.5066H97.5685V46.5033H105.322C107.519 46.5033 108.409 47.6075 108.409 49.7453V51.2646Z" fill="black"/>
        </svg> 
      </div>
    </div>

  </footer>
)

export default Footer