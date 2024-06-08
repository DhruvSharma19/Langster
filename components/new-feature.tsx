interface INewFeaturesProps {
   imgUrl: string
   title: string
   subtitle: string
}

export default function NewFeatures({ imgUrl, title, subtitle }: INewFeaturesProps) {
   return (
      <div className="flex flex-col flex-1 sm:max-w-[250px] min-w-[210px]">
         <div className={`flex-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
            <img src={imgUrl} alt="Icon" className="object-contain w-1/2 h-1/2" />
         </div>
         <h1 className="mt-[26px] font-black text-[24px] leading-[30px] text-white">Title {title}</h1>
         <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">{subtitle}</p>
      </div>
   )
}
