import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import imageSrc from '@/assets/images/remax.png';
import styles from './index.css';

class pageIndex extends React.PureComponent {
  constructor(props: any) {
    super(props);
  }


  render() {
    return (
      <View className={styles.app}>
        <View className={styles.header}>
          <Image
            // src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
            src={imageSrc}
            className={styles.logo}
          />
          <View className={styles.text}>
            编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{' '}
            开始
          </View>
        </View>
      </View>
    );
  }
}

export default pageIndex;
