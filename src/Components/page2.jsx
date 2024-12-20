import styles from './page2.module.css';
import Card from "./Card"
function Page2(){
    return (
        <>
            <div className={styles.main}>
                <div className={styles.feedbacks}>
                    <Card cont="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt fugit dicta ut saepe dolores reprehenderit explicabo veritatis temporibus maxime itaque? Quis odit quas quidem commodi dolorem earum quod consequatur doloribus officia ratione sint illo architecto, voluptatem laboriosam expedita asperiores et accusantium animi aperiam laborum tempore fugiat illum cumque quisquam? Dolorem!" />
                    <Card cont="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores." />
                    <Card cont="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt." />
                    <Card cont="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum." />
                    <Card cont="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum." />
                    <Card cont="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!" />
                    <Card cont="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima." />
                    <Card cont="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cum." />
                    <Card cont="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                </div>
            </div>

        </>
    )
}

export default Page2;