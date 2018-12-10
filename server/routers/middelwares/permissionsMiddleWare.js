const CabinetCore = require( '../../core/Cabinet');
const UserCore = require( '../../core/User');


const permissionMiddleWare = {
    isAdmin: async(req, res, next ) => {

        if(!((req.session || {}).passport || {}).user){
            res.status( 401 );
            return res.send( { message:'Unauthorised' } );
        }

        const user = JSON.parse(req.session.passport.user);

        if (user.role < 2) {
            res.status( 401 );
            return res.send({message: 'Доступно тільки для адміна'});
        }

        next();
    },
    isUserHasRightsUpdateOtherUser: async (req, res, next) => {
        const currentUser = JSON.parse(req.session.passport.user) || {};
        const { user_id } = req.query;
        const { role } = req.body;

        const currentUserRole = Number(currentUser.role);
        const requestedRole = Number(role);

        if (isNaN(currentUserRole)) {
            res.status(401);
            return res.send({ message: 'Ви не маєте прав на оновлення' });
        }

        if (!isNaN(requestedRole) && currentUserRole < requestedRole ) {
            res.status(401);
            return res.send({ message: 'У вас немає прав на оновлення ролі' });
        }

        if (`${currentUser._id}` === `${user_id}`) {
            if (req.body.role && currentUserRole !== requestedRole) {
                res.status(401);
                return res.send({ message: 'Ви не можете міняти свою роль' });
            }
            return next();
        }

        if (requestedRole > 2) {
            res.status(401);
            return res.send({ message: 'Ви не можете дати роль суперадміна' });
        }

        try {
            const requestedUser = await UserCore.getUserById(user_id);
            const requestedUserRole = Number(requestedUser.role);

            if (currentUserRole <= requestedUserRole) {
                res.status(401);
                return res.send({ message: 'У вас немає прав на оновлення даного користувача' });
            }
    
            next();

        } catch (error) {
            res.send(error);
        }
    },
};

module.exports = permissionMiddleWare;

