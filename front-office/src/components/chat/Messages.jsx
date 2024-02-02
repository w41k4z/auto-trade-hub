import React from "react";

const Messages = () => {
  return <section className="message-section">
    <header className="py-1 px-2 d-flex align-items-center">
      <p className="m-0 text-white">current_target_name</p>
    </header>
    <div className="messages pt-2">
      <div className="message">
         <div className="message-info">
           <img src="" alt="" />
           <span>just now</span>
         </div>
         <div className="message-content">
            <p>Hello test message lava be aueiornj f hzeurhyeziurhejkhnruçezhyrezhy çazyhe_uazyçezyrç_ezyç_ryezç_è ruç_zeijçdshy_èdyeauchbehzugrèyezhgrfi uydbsfuergièèèèèèèèèèèèèèèèèèèè èèèèèèèèèèèèèèèèèèèèèèèè èèèèèèèèèèèèèèèè</p>
         </div>
      </div>
      <div className="message owner">
         <div className="message-info">
           <img src="" alt="" />
           <span>just now</span>
         </div>
         <div className="message-content">
            <p>Hello test message azejkdhjkheça_r azehiuazh iueaçhurazaiue ahazueyazç_ehyçazeh azyçe_ yçazyeçazyçhaz iuazyeçèazyeç hzae y_çazey auhya_zè-yeèza heyazç_eyh uize_èazyet hazçe-y ç_zyç_ azye</p>
         </div>
      </div>
    </div>
    <div className="d-flex send">
      <textarea type="text" placeholder="Type something..." />
      <button>Send</button>
    </div>
  </section>;
};

export default Messages;
