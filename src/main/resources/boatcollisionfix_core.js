function initializeCoreMod() {
    Java.type('net.minecraftforge.coremod.api.ASMAPI').loadFile('easycorelib.js')

    easycore.include('me')

    var BoatCollisionFix     = me.paulf.boatcollisionfix.BoatCollisionFix,
        Entity               = net.minecraft.entity.Entity,
        LivingEntity         = net.minecraft.entity.LivingEntity,
        Pose                 = net.minecraft.entity.Pose,
        ServerPlayNetHandler = net.minecraft.network.play.ServerPlayNetHandler,
        AxisAlignedBB        = net.minecraft.util.math.AxisAlignedBB;
        IWorldReader         = net.minecraft.world.IWorldReader,

    // MC-156980
    easycore.inMethod(ServerPlayNetHandler.func_223133_a(IWorldReader), boolean)
        .atFirst(ldc).replace(ldc(double(0.0625)))

    easycore.inMethod(Entity.func_213298_c(Pose), boolean)
        .atFirst(invokevirtual).append(invokestatic(BoatCollisionFix.isPoseClear(AxisAlignedBB), AxisAlignedBB))

    // Fix MC-136367
    easycore.inMethod(LivingEntity.func_110145_l(Entity))
        .atEach(invokevirtual(AxisAlignedBB.func_111270_a(AxisAlignedBB), AxisAlignedBB)).replace(pop)

    return easycore.build()
}