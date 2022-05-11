describe("user", () => {
    it('중복된 아이디의 회원이 없다면 데이터베이스에 저장되어야 한다', async function () {
        const db = require('../../models');
        const controller = require('../../controller/user');
        const user = {
            id: 'newBie',
            email: 'test@test.com',
            type: 'EMPLOYEE'
        }

        const result = await controller.signUpNewbie(db, user);
        const newBie = await db.user.findOne({where: {id: user.id}});

        expect(result.id).toEqual(newBie.id);
        expect(result.email).toEqual(newBie.email);
        expect(result.type).toEqual(newBie.type);
    });
})