const UIComponent = require('../src/uiComponent');

describe('Snapshot Testing', () => {

    test('should match user card snapshot', () => {
        const user = {
            name: 'Bug Hunter',
            email: 'bug@automateNow.io',
            role: 'Tester',
            joinDate: '2026-01-01'
        };

        const component = UIComponent.renderUserCard(user);

        expect(component).toMatchSnapshot();
    });
});