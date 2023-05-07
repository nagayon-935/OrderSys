import { Typography } from '@mui/material';
import Link from 'next/link';
import styles from 'styles/nav.module.css'
import { styled } from '@mui/system';

export default function Nav() {

    const CustomTypography = styled(Typography)(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
          fontSize: '0.8rem'
        },
        [theme.breakpoints.up('sm')]: {
          fontSize: '1rem'
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '1.4rem'
        },
      }));

    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href="/">
                        <a><CustomTypography>Home</CustomTypography></a>
                    </Link>
                </li>
                <li>
                    <Link href="/menu">
                        <a><CustomTypography>Menu</CustomTypography></a>
                    </Link>
                </li>
                <li>
                    <CustomTypography>合計金額:<span>00000</span>円</CustomTypography>
                    {/* useStateを使って金額を管理、表示する ５桁固定でBoxタグを新たなコンポーネントを作成して変更する*/}
                </li>
            </ul>
        </nav>
    )
}