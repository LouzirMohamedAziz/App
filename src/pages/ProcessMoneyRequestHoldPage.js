import React, {useCallback, useMemo} from 'react';
import {View} from 'react-native';
import Button from '@components/Button';
import HeaderPageLayout from '@components/HeaderPageLayout';
import HoldMenuSectionList from '@components/HoldMenuSectionList';
import Text from '@components/Text';
import useLocalize from '@hooks/useLocalize';
import useThemeStyles from '@hooks/useThemeStyles';
import Navigation from '@libs/Navigation/Navigation';

function ProcessMoneyRequestHoldPage() {
    const styles = useThemeStyles();
    const {translate} = useLocalize();

    const onConfirm = useCallback(() => {
        // Currently only goes back, this will be changed after backends for hold will be merged
        Navigation.goBack();
    }, []);

    const footerComponent = useMemo(
        () => (
            <Button
                success
                text={translate('common.buttonConfirm')}
                onPress={onConfirm}
            />
        ),
        [onConfirm, translate],
    );

    return (
        <HeaderPageLayout
            title={translate('common.back')}
            footer={footerComponent}
            onBackButtonPress={() => Navigation.goBack()}
        >
            <View style={[styles.mh5, styles.flex1]}>
                <View style={[styles.flexRow, styles.alignItemsCenter, styles.mb5]}>
                    <Text style={[styles.textHeadline, styles.mr2]}>{translate('iou.holdEducationalTitle')}</Text>
                    <Text style={[styles.holdRequestInline]}>{translate('iou.hold')}</Text>
                </View>
                <HoldMenuSectionList />
            </View>
        </HeaderPageLayout>
    );
}

ProcessMoneyRequestHoldPage.displayName = 'ProcessMoneyRequestHoldPage';

export default ProcessMoneyRequestHoldPage;
