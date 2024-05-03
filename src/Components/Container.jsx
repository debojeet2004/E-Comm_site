function Container({children, classes}) {
    return  <div className={`container w-full max-w-9xl ${classes}  border-black mx-auto  min-h-[2rem]`}>{children}</div>
    
}

export default Container