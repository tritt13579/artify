import Work from "@models/Work";
import User from "@models/User";

import { connectToDB } from "@mongodb/database";

export const PATCH = async (req, { params }) => {
  try {
    await connectToDB();
    // const userId = params.id;
    // const workId = params.workId;

    // const {id, workId} = params;

    let data = Object.entries(params).map(([key, value]) => ({ key, value }));

    let userId, workId;

for (const item of data) {
    if (item.key === 'id') {
        userId = item.value;
    } else if (item.key === 'workld') {
        workId = item.value;
    }
}

    const user = await User.findById(userId);
    const work = await Work.findById(workId);

    const favoriteWork = user?.wishlist.find((item) => item?._id.toString() === workId)
    
    if (favoriteWork) {
      user.wishlist = user.wishlist.filter((item) => item?._id.toString() !== workId);
      await user.save()
      return new Response(JSON.stringify({ message: "Work removed from wishlist", wishlist: user.wishlist }), { status: 200 });
    } else {
      console.log("zo")
      user.wishlist.push(work);
      await user.save()
      return new Response(JSON.stringify({ message: "Work added to wishlist", wishlist: user.wishlist }), { status: 200 });
    }
  } catch (err) {
    console.log(err)
    return new Response("Failed to patch work to wishlist", { status: 500 })
  }
}
