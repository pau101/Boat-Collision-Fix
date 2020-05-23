package me.paulf.boatcollisionfix;

import net.minecraft.util.math.AxisAlignedBB;
import net.minecraftforge.fml.common.Mod;

@Mod(BoatCollisionFix.ID)
public final class BoatCollisionFix {
    public static final String ID = "boatcollisionfix";

    public BoatCollisionFix() {}

    public static AxisAlignedBB isPoseClear(final AxisAlignedBB bb) {
        return bb.shrink(2.0D / 4096.0D);
    }
}
