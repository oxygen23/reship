import classNames from 'classnames'
import React from 'react'
import styles from './CartItem.module.sass'

const CartItem = () => {
  return (
    <>
      <div
        className={classNames(
          styles.person__delivery_items_item,
          styles.cart__delivery_items_item
        )}
      >
        <div className={styles.cart__delivery_items_item_block_img}>
          <img
            src="./assets/img/iphone-prev.png"
            alt="item"
            className={classNames(
              styles.person__delivery_items_item_img,
              styles.cart__delivery_items_item_block_img_img
            )}
          />
        </div>

        <span
          className={classNames(
            styles.person__delivery_items_item_name,
            styles.cart__delivery_items_item_name
          )}
        >
          IPhone 11 (128 gb)
        </span>

        <div
          className={classNames(
            styles.person__delivery_items_item_count,
            styles.cart__delivery_items_item_count
          )}
        >
          <div className={styles.cart__delivery_items_item_count_wrapper}>
            <button className={styles.cart__delivery_items_item_count_minus}>
              <div></div>
            </button>
            <div
              className={classNames(
                styles.person__delivery_items_item_count_number_block,
                styles.cart__delivery_items_item_count_number_block
              )}
            >
              <span
                className={classNames(
                  styles.person__delivery_items_item_count_number_block_item,
                  styles.cart__delivery_items_item_count_number_block_item
                )}
              >
                1
              </span>
            </div>
            <button className={styles.cart__delivery_items_item_count_pluses}>
              <div
                className={styles.cart__delivery_items_item_count_pluses_block}
              >
                <div
                  className={
                    styles.cart__delivery_items_item_count_pluses_itemv
                  }
                ></div>
                <div
                  className={
                    styles.cart__delivery_items_item_count_pluses_itemh
                  }
                ></div>
              </div>
            </button>
          </div>
        </div>

        <div
          className={classNames(
            styles.person__delivery_items_item_price,
            styles.cart__delivery_items_item_price
          )}
        >
          43,000 Р
        </div>
      </div>
    </>
  )
}

export default CartItem
