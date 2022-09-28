import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
    console.log(`pageInfo endpoint: 
    ${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    console.log("fetching pageInfo: ", pageInfo);

    return pageInfo;
}
