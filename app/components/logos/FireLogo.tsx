function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const FireLogo = ({className, color='dark'}:{className?: string, color?: 'light' | 'dark'} = {}) => {
  const textColor = color === 'dark'? `text-gray-100` : `text-indigo-600`
  return (
    <div className={classNames(
        className || '',
        'flex align-middle items-center'
      )}>
      <svg width="50" height="50" viewBox="180 180 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_11_7763)">
          <mask id="mask0_11_7763" className="mask-type:luminance" maskUnits="userSpaceOnUse" x="187" y="191" width="126" height="68">
            <path d="M187.588 191.849H312.588V258.735H187.588V191.849Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_11_7763)">
            <mask id="mask1_11_7763" className="mask-type:luminance" maskUnits="userSpaceOnUse" x="187" y="191" width="126" height="68">
              <path d="M250.088 249.313C217.182 249.313 190.213 223.99 187.791 191.865C187.677 193.422 187.614 194.995 187.614 196.578C187.614 230.912 215.583 258.745 250.088 258.745C284.588 258.745 312.557 230.912 312.557 196.578C312.557 194.995 312.5 193.422 312.38 191.865C309.958 223.99 282.994 249.313 250.088 249.313Z" fill="white"/>
            </mask>
            <g mask="url(#mask1_11_7763)">
              <mask id="mask2_11_7763" className="mask-type:luminance" maskUnits="userSpaceOnUse" x="187" y="191" width="126" height="68">
                <path d="M250.088 249.313C217.182 249.313 190.213 223.99 187.791 191.865C187.677 193.422 187.614 194.995 187.614 196.578C187.614 230.912 215.583 258.745 250.088 258.745C284.588 258.745 312.557 230.912 312.557 196.578C312.557 194.995 312.5 193.422 312.38 191.865C309.958 223.99 282.994 249.313 250.088 249.313Z" fill="white"/>
              </mask>
              <g mask="url(#mask2_11_7763)">
                <mask id="mask3_11_7763" className="mask-type:luminance" maskUnits="userSpaceOnUse" x="154" y="130" width="192" height="190">
                  <path d="M345.494 231.938L262.484 130.938L154.677 218.667L237.692 319.672L345.494 231.938Z" fill="white"/>
                </mask>
                <g mask="url(#mask3_11_7763)">
                  <path d="M345.489 231.938L262.484 130.938L154.682 218.667L237.687 319.661L345.489 231.938Z" fill="url(#paint0_radial_11_7763)"/>
                  <path d="M345.489 231.938L262.484 130.938L154.682 218.667L237.687 319.661L345.489 231.938Z" fill="white" fill-opacity="0.6"/>
                </g>
              </g>
            </g>
          </g>
          <mask id="mask4_11_7763" className="mask-type:luminance" maskUnits="userSpaceOnUse" x="200" y="149" width="111" height="96">
            <path d="M200.266 149.734H310.667V244.135H200.266V149.734Z" fill="white"/>
          </mask>
          <g mask="url(#mask4_11_7763)">
            <mask id="mask5_11_7763" className="mask-type:luminance" maskUnits="userSpaceOnUse" x="200" y="149" width="111" height="96">
              <path d="M307.776 177.537C307.766 177.505 307.75 177.479 307.74 177.453C306.505 174.568 304.51 172.198 302.818 169.485C297.833 161.479 304.484 158.172 301.625 149.74C298.042 155.042 292.198 158.188 285.115 159.396C280.521 160.177 272.349 161.307 270.089 169.245C270.391 169.104 270.729 168.99 271.099 168.917C275.286 168.089 274.714 165.719 274.714 165.719C275.016 166.136 276.12 168.386 272.635 169.917C271.401 170.464 270.37 171.386 269.552 172.349C269.339 172.636 263.01 181.198 266.771 187.708C266.771 187.708 273.474 172.557 284.245 176.172C295.151 179.833 292.464 209.865 271.182 209.865C251.859 209.865 235.974 194.375 235.943 175.146C235.938 171.901 236.38 168.755 237.208 165.776C234.135 171.188 232.38 177.438 232.38 184.094C232.38 203.12 246.698 218.818 265.193 221.104C263.891 221.214 262.573 221.266 261.24 221.266C234.896 221.266 213.536 200.016 213.536 173.802C213.536 169.396 214.146 165.136 215.271 161.089C211.078 168.479 208.682 177.005 208.682 186.099C208.682 204.953 218.984 221.412 234.292 230.208C226.177 229.026 218.214 225.995 211.042 220.99C206.932 218.115 203.344 214.776 200.297 211.094C204.464 219.792 210.87 227.578 219.365 233.505C245.63 251.854 281.875 245.537 300.312 219.396C305.224 212.432 308.375 204.771 309.859 196.922C309.854 196.922 309.844 196.917 309.839 196.917C309.958 196.37 310.068 195.818 310.167 195.266C311.271 189.255 310.438 183.037 307.776 177.537Z" fill="white"/>
            </mask>
            <g mask="url(#mask5_11_7763)">
              <mask id="mask6_11_7763" className="mask-type:luminance" maskUnits="userSpaceOnUse" x="200" y="149" width="111" height="96">
                <path d="M307.776 177.537C307.766 177.505 307.75 177.479 307.74 177.453C306.505 174.568 304.51 172.198 302.818 169.485C297.833 161.479 304.484 158.172 301.625 149.74C298.042 155.042 292.198 158.188 285.115 159.396C280.521 160.177 272.349 161.307 270.089 169.245C270.391 169.104 270.729 168.99 271.099 168.917C275.286 168.089 274.714 165.719 274.714 165.719C275.016 166.136 276.12 168.386 272.635 169.917C271.401 170.464 270.37 171.386 269.552 172.349C269.339 172.636 263.01 181.198 266.771 187.708C266.771 187.708 273.474 172.557 284.245 176.172C295.151 179.833 292.464 209.865 271.182 209.865C251.859 209.865 235.974 194.375 235.943 175.146C235.938 171.901 236.38 168.755 237.208 165.776C234.135 171.188 232.38 177.438 232.38 184.094C232.38 203.12 246.698 218.818 265.193 221.104C263.891 221.214 262.573 221.266 261.24 221.266C234.896 221.266 213.536 200.016 213.536 173.802C213.536 169.396 214.146 165.136 215.271 161.089C211.078 168.479 208.682 177.005 208.682 186.099C208.682 204.953 218.984 221.412 234.292 230.208C226.177 229.026 218.214 225.995 211.042 220.99C206.932 218.115 203.344 214.776 200.297 211.094C204.464 219.792 210.87 227.578 219.365 233.505C245.63 251.854 281.875 245.537 300.312 219.396C305.224 212.432 308.375 204.771 309.859 196.922C309.854 196.922 309.844 196.917 309.839 196.917C309.958 196.37 310.068 195.818 310.167 195.266C311.271 189.255 310.438 183.037 307.776 177.537Z" fill="white"/>
              </mask>
              <g mask="url(#mask6_11_7763)">
                <mask id="mask7_11_7763" className="mask-type:luminance" maskUnits="userSpaceOnUse" x="150" y="95" width="212" height="211">
                  <path d="M361.557 210.927L266.792 95.6304L150.01 190.667L244.776 305.969L361.557 210.927Z" fill="white"/>
                </mask>
                <g mask="url(#mask7_11_7763)">
                  <path d="M357.161 206.302L266.438 95.917L153.812 187.573L244.536 297.959L357.161 206.302Z" fill="url(#paint1_radial_11_7763)"/>
                </g>
              </g>
            </g>
          </g>
        </g>
        <defs>
          <radialGradient id="paint0_radial_11_7763" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(303.441 151.656) rotate(140.862) scale(159.472 159.314)">
            <stop stopColor="#7A7879"/>
            <stop offset="0.0078125" stopColor="#7A7878"/>
            <stop offset="0.0195312" stopColor="#797778"/>
            <stop offset="0.0234375" stopColor="#797778"/>
            <stop offset="0.0273438" stopColor="#797677"/>
            <stop offset="0.03125" stopColor="#797677"/>
            <stop offset="0.0429688" stopColor="#787576"/>
            <stop offset="0.0546875" stopColor="#777575"/>
            <stop offset="0.0585938" stopColor="#777575"/>
            <stop offset="0.0625" stopColor="#767474"/>
            <stop offset="0.0664062" stopColor="#767374"/>
            <stop offset="0.078125" stopColor="#757274"/>
            <stop offset="0.0898438" stopColor="#757273"/>
            <stop offset="0.101562" stopColor="#747172"/>
            <stop offset="0.105469" stopColor="#747171"/>
            <stop offset="0.109375" stopColor="#737171"/>
            <stop offset="0.113281" stopColor="#727070"/>
            <stop offset="0.125" stopColor="#726F70"/>
            <stop offset="0.136719" stopColor="#726F70"/>
            <stop offset="0.140625" stopColor="#716E6F"/>
            <stop offset="0.144531" stopColor="#716E6F"/>
            <stop offset="0.148438" stopColor="#706D6E"/>
            <stop offset="0.160156" stopColor="#6F6D6D"/>
            <stop offset="0.171875" stopColor="#6F6D6D"/>
            <stop offset="0.183594" stopColor="#6F6C6D"/>
            <stop offset="0.1875" stopColor="#6E6C6D"/>
            <stop offset="0.191406" stopColor="#6E6B6C"/>
            <stop offset="0.195312" stopColor="#6D6B6C"/>
            <stop offset="0.207031" stopColor="#6D6A6B"/>
            <stop offset="0.21875" stopColor="#6C6A6A"/>
            <stop offset="0.222656" stopColor="#6C6A6A"/>
            <stop offset="0.226562" stopColor="#6B6969"/>
            <stop offset="0.230469" stopColor="#6B6969"/>
            <stop offset="0.242188" stopColor="#6B6869"/>
            <stop offset="0.253906" stopColor="#6A6768"/>
            <stop offset="0.261719" stopColor="#696767"/>
            <stop offset="0.269531" stopColor="#696667"/>
            <stop offset="0.273438" stopColor="#686666"/>
            <stop offset="0.28125" stopColor="#686566"/>
            <stop offset="0.289062" stopColor="#676565"/>
            <stop offset="0.296875" stopColor="#676465"/>
            <stop offset="0.304688" stopColor="#666464"/>
            <stop offset="0.3125" stopColor="#666364"/>
            <stop offset="0.320312" stopColor="#656363"/>
            <stop offset="0.328125" stopColor="#656263"/>
            <stop offset="0.335938" stopColor="#646262"/>
            <stop offset="0.34375" stopColor="#646162"/>
            <stop offset="0.347656" stopColor="#646162"/>
            <stop offset="0.351562" stopColor="#636061"/>
            <stop offset="0.359375" stopColor="#636061"/>
            <stop offset="0.367188" stopColor="#625F60"/>
            <stop offset="0.375" stopColor="#625F60"/>
            <stop offset="0.382812" stopColor="#615E5F"/>
            <stop offset="0.390625" stopColor="#615E5F"/>
            <stop offset="0.398438" stopColor="#605D5E"/>
            <stop offset="0.40625" stopColor="#605D5E"/>
            <stop offset="0.414062" stopColor="#5F5C5D"/>
            <stop offset="0.421875" stopColor="#5F5C5C"/>
            <stop offset="0.429688" stopColor="#5E5B5C"/>
            <stop offset="0.4375" stopColor="#5E5B5B"/>
            <stop offset="0.445312" stopColor="#5D5A5B"/>
            <stop offset="0.453125" stopColor="#5D5A5A"/>
            <stop offset="0.460938" stopColor="#5C595A"/>
            <stop offset="0.46875" stopColor="#5C5959"/>
            <stop offset="0.476562" stopColor="#5B5859"/>
            <stop offset="0.484375" stopColor="#5B5858"/>
            <stop offset="0.492188" stopColor="#5A5758"/>
            <stop offset="0.5" stopColor="#595657"/>
            <stop offset="0.507812" stopColor="#595656"/>
            <stop offset="0.519531" stopColor="#585556"/>
            <stop offset="0.523438" stopColor="#585556"/>
            <stop offset="0.527344" stopColor="#575455"/>
            <stop offset="0.539062" stopColor="#565354"/>
            <stop offset="0.550781" stopColor="#555353"/>
            <stop offset="0.5625" stopColor="#555253"/>
            <stop offset="0.574219" stopColor="#545252"/>
            <stop offset="0.585938" stopColor="#535152"/>
            <stop offset="0.597656" stopColor="#535051"/>
            <stop offset="0.601562" stopColor="#525051"/>
            <stop offset="0.605469" stopColor="#524F50"/>
            <stop offset="0.609375" stopColor="#524F50"/>
            <stop offset="0.621094" stopColor="#524E4F"/>
            <stop offset="0.632812" stopColor="#514E4F"/>
            <stop offset="0.640625" stopColor="#504D4E"/>
            <stop offset="0.648438" stopColor="#504C4D"/>
            <stop offset="0.65625" stopColor="#4F4C4D"/>
            <stop offset="0.664062" stopColor="#4F4B4D"/>
            <stop offset="0.671875" stopColor="#4E4B4C"/>
            <stop offset="0.679688" stopColor="#4E4A4B"/>
            <stop offset="0.6875" stopColor="#4D4A4B"/>
            <stop offset="0.691406" stopColor="#4D4A4A"/>
            <stop offset="0.699219" stopColor="#4C494A"/>
            <stop offset="0.707031" stopColor="#4C4949"/>
            <stop offset="0.714844" stopColor="#4B4849"/>
            <stop offset="0.722656" stopColor="#4B4848"/>
            <stop offset="0.730469" stopColor="#4A4748"/>
            <stop offset="0.738281" stopColor="#4A4647"/>
            <stop offset="0.746094" stopColor="#494647"/>
            <stop offset="0.753906" stopColor="#494546"/>
            <stop offset="0.757812" stopColor="#494546"/>
            <stop offset="0.761719" stopColor="#484546"/>
            <stop offset="0.765625" stopColor="#484545"/>
            <stop offset="0.769531" stopColor="#484545"/>
            <stop offset="0.773438" stopColor="#474545"/>
            <stop offset="0.777344" stopColor="#474445"/>
            <stop offset="0.78125" stopColor="#464445"/>
            <stop offset="0.792969" stopColor="#464344"/>
            <stop offset="0.804688" stopColor="#464243"/>
            <stop offset="0.808594" stopColor="#464243"/>
            <stop offset="0.8125" stopColor="#454142"/>
            <stop offset="0.816406" stopColor="#454142"/>
            <stop offset="0.824219" stopColor="#444042"/>
            <stop offset="0.832031" stopColor="#444041"/>
            <stop offset="0.839844" stopColor="#434041"/>
            <stop offset="0.847656" stopColor="#433F40"/>
            <stop offset="0.851562" stopColor="#423F40"/>
            <stop offset="0.859375" stopColor="#423E3F"/>
            <stop offset="0.867188" stopColor="#413E3F"/>
            <stop offset="0.875" stopColor="#413D3E"/>
            <stop offset="0.882812" stopColor="#413C3D"/>
            <stop offset="0.886719" stopColor="#403C3D"/>
            <stop offset="0.890625" stopColor="#403C3D"/>
            <stop offset="0.894531" stopColor="#3F3C3C"/>
            <stop offset="0.898438" stopColor="#3F3C3C"/>
            <stop offset="0.902344" stopColor="#3F3C3C"/>
            <stop offset="0.90625" stopColor="#3E3B3C"/>
            <stop offset="0.910156" stopColor="#3E3B3C"/>
            <stop offset="0.917969" stopColor="#3E3A3B"/>
            <stop offset="0.925781" stopColor="#3D3A3B"/>
            <stop offset="0.933594" stopColor="#3D393A"/>
            <stop offset="0.941406" stopColor="#3C393A"/>
            <stop offset="0.953125" stopColor="#3C3839"/>
            <stop offset="0.957031" stopColor="#3B3839"/>
            <stop offset="0.964844" stopColor="#3A3838"/>
            <stop offset="0.972656" stopColor="#3A3738"/>
            <stop offset="0.976562" stopColor="#3A3637"/>
            <stop offset="0.988281" stopColor="#393637"/>
            <stop offset="0.992188" stopColor="#393637"/>
            <stop offset="1" stopColor="#393536"/>
          </radialGradient>
          <radialGradient id="paint1_radial_11_7763" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(303.441 151.657) rotate(140.862) scale(159.472 159.314)">
            <stop stopColor="#F9A62B"/>
            <stop offset="0.00390625" stopColor="#F8A42B"/>
            <stop offset="0.0078125" stopColor="#F8A32A"/>
            <stop offset="0.0117188" stopColor="#F8A12A"/>
            <stop offset="0.015625" stopColor="#F8A02A"/>
            <stop offset="0.0195312" stopColor="#F89E2A"/>
            <stop offset="0.0234375" stopColor="#F89C2A"/>
            <stop offset="0.0273438" stopColor="#F89B29"/>
            <stop offset="0.03125" stopColor="#F89929"/>
            <stop offset="0.0351562" stopColor="#F79829"/>
            <stop offset="0.0390625" stopColor="#F79629"/>
            <stop offset="0.0429688" stopColor="#F79529"/>
            <stop offset="0.046875" stopColor="#F79329"/>
            <stop offset="0.0507812" stopColor="#F79328"/>
            <stop offset="0.0546875" stopColor="#F79128"/>
            <stop offset="0.0585938" stopColor="#F79028"/>
            <stop offset="0.0625" stopColor="#F78F28"/>
            <stop offset="0.0664062" stopColor="#F78D28"/>
            <stop offset="0.0703125" stopColor="#F68B27"/>
            <stop offset="0.0742188" stopColor="#F68A27"/>
            <stop offset="0.078125" stopColor="#F68927"/>
            <stop offset="0.0820312" stopColor="#F68727"/>
            <stop offset="0.0859375" stopColor="#F68627"/>
            <stop offset="0.0898438" stopColor="#F68627"/>
            <stop offset="0.09375" stopColor="#F68427"/>
            <stop offset="0.0976562" stopColor="#F68327"/>
            <stop offset="0.101562" stopColor="#F68227"/>
            <stop offset="0.105469" stopColor="#F68026"/>
            <stop offset="0.109375" stopColor="#F57F26"/>
            <stop offset="0.113281" stopColor="#F57E26"/>
            <stop offset="0.117188" stopColor="#F57D26"/>
            <stop offset="0.121094" stopColor="#F57B26"/>
            <stop offset="0.125" stopColor="#F57A26"/>
            <stop offset="0.128906" stopColor="#F57A26"/>
            <stop offset="0.132812" stopColor="#F57926"/>
            <stop offset="0.136719" stopColor="#F57826"/>
            <stop offset="0.140625" stopColor="#F57726"/>
            <stop offset="0.144531" stopColor="#F57625"/>
            <stop offset="0.148438" stopColor="#F47425"/>
            <stop offset="0.152344" stopColor="#F47325"/>
            <stop offset="0.15625" stopColor="#F47225"/>
            <stop offset="0.160156" stopColor="#F47125"/>
            <stop offset="0.164062" stopColor="#F47025"/>
            <stop offset="0.167969" stopColor="#F46F25"/>
            <stop offset="0.171875" stopColor="#F46E25"/>
            <stop offset="0.175781" stopColor="#F46D25"/>
            <stop offset="0.179688" stopColor="#F46D25"/>
            <stop offset="0.183594" stopColor="#F46C25"/>
            <stop offset="0.1875" stopColor="#F46B25"/>
            <stop offset="0.191406" stopColor="#F46925"/>
            <stop offset="0.195312" stopColor="#F36825"/>
            <stop offset="0.199219" stopColor="#F36725"/>
            <stop offset="0.203125" stopColor="#F36625"/>
            <stop offset="0.207031" stopColor="#F36624"/>
            <stop offset="0.210938" stopColor="#F36624"/>
            <stop offset="0.214844" stopColor="#F36524"/>
            <stop offset="0.21875" stopColor="#F36424"/>
            <stop offset="0.222656" stopColor="#F36324"/>
            <stop offset="0.226562" stopColor="#F36124"/>
            <stop offset="0.230469" stopColor="#F36124"/>
            <stop offset="0.234375" stopColor="#F36024"/>
            <stop offset="0.238281" stopColor="#F35F24"/>
            <stop offset="0.242188" stopColor="#F35F24"/>
            <stop offset="0.246094" stopColor="#F35E24"/>
            <stop offset="0.25" stopColor="#F35E24"/>
            <stop offset="0.253906" stopColor="#F35D24"/>
            <stop offset="0.257812" stopColor="#F25C24"/>
            <stop offset="0.265625" stopColor="#F25B24"/>
            <stop offset="0.269531" stopColor="#F25A24"/>
            <stop offset="0.273438" stopColor="#F25924"/>
            <stop offset="0.277344" stopColor="#F25824"/>
            <stop offset="0.285156" stopColor="#F25724"/>
            <stop offset="0.289062" stopColor="#F25624"/>
            <stop offset="0.292969" stopColor="#F25524"/>
            <stop offset="0.300781" stopColor="#F25424"/>
            <stop offset="0.308594" stopColor="#F25324"/>
            <stop offset="0.3125" stopColor="#F25324"/>
            <stop offset="0.320312" stopColor="#F25224"/>
            <stop offset="0.324219" stopColor="#F25224"/>
            <stop offset="0.328125" stopColor="#F15124"/>
            <stop offset="0.332031" stopColor="#F15124"/>
            <stop offset="0.335938" stopColor="#F15024"/>
            <stop offset="0.34375" stopColor="#F14F24"/>
            <stop offset="0.351562" stopColor="#F14F24"/>
            <stop offset="0.355469" stopColor="#F14D24"/>
            <stop offset="0.363281" stopColor="#F14C24"/>
            <stop offset="0.371094" stopColor="#F14C24"/>
            <stop offset="0.378906" stopColor="#F14B24"/>
            <stop offset="0.386719" stopColor="#F14B24"/>
            <stop offset="0.394531" stopColor="#F14A24"/>
            <stop offset="0.402344" stopColor="#F14924"/>
            <stop offset="0.417969" stopColor="#F14824"/>
            <stop offset="0.425781" stopColor="#F14824"/>
            <stop offset="0.441406" stopColor="#F14724"/>
            <stop offset="0.457031" stopColor="#F14624"/>
            <stop offset="0.488281" stopColor="#F04624"/>
            <stop offset="0.519531" stopColor="#F04524"/>
            <stop offset="0.523438" stopColor="#F04524"/>
            <stop offset="0.527344" stopColor="#EF4524"/>
            <stop offset="0.53125" stopColor="#EF4524"/>
            <stop offset="0.535156" stopColor="#EE4424"/>
            <stop offset="0.539062" stopColor="#EE4424"/>
            <stop offset="0.542969" stopColor="#EE4324"/>
            <stop offset="0.546875" stopColor="#ED4324"/>
            <stop offset="0.550781" stopColor="#ED4324"/>
            <stop offset="0.554688" stopColor="#EC4224"/>
            <stop offset="0.558594" stopColor="#EC4225"/>
            <stop offset="0.5625" stopColor="#EB4125"/>
            <stop offset="0.566406" stopColor="#EB4125"/>
            <stop offset="0.570312" stopColor="#EB4025"/>
            <stop offset="0.574219" stopColor="#EB4025"/>
            <stop offset="0.578125" stopColor="#EA3F25"/>
            <stop offset="0.582031" stopColor="#EA3F25"/>
            <stop offset="0.585938" stopColor="#E93F25"/>
            <stop offset="0.589844" stopColor="#E93F25"/>
            <stop offset="0.59375" stopColor="#E83E25"/>
            <stop offset="0.597656" stopColor="#E83E26"/>
            <stop offset="0.601562" stopColor="#E73D26"/>
            <stop offset="0.605469" stopColor="#E73D26"/>
            <stop offset="0.609375" stopColor="#E63C26"/>
            <stop offset="0.613281" stopColor="#E63C26"/>
            <stop offset="0.617188" stopColor="#E53C26"/>
            <stop offset="0.621094" stopColor="#E53B26"/>
            <stop offset="0.625" stopColor="#E43B26"/>
            <stop offset="0.628906" stopColor="#E43B26"/>
            <stop offset="0.632812" stopColor="#E33A27"/>
            <stop offset="0.640625" stopColor="#E33927"/>
            <stop offset="0.648438" stopColor="#E23827"/>
            <stop offset="0.652344" stopColor="#E13827"/>
            <stop offset="0.660156" stopColor="#E03827"/>
            <stop offset="0.667969" stopColor="#E03727"/>
            <stop offset="0.675781" stopColor="#DF3627"/>
            <stop offset="0.683594" stopColor="#DE3528"/>
            <stop offset="0.691406" stopColor="#DE3428"/>
            <stop offset="0.699219" stopColor="#DD3328"/>
            <stop offset="0.707031" stopColor="#DC3228"/>
            <stop offset="0.714844" stopColor="#DB3228"/>
            <stop offset="0.722656" stopColor="#DA3228"/>
            <stop offset="0.726562" stopColor="#DA3129"/>
            <stop offset="0.730469" stopColor="#D93029"/>
            <stop offset="0.738281" stopColor="#D83029"/>
            <stop offset="0.746094" stopColor="#D72F29"/>
            <stop offset="0.753906" stopColor="#D72F29"/>
            <stop offset="0.757812" stopColor="#D62E29"/>
            <stop offset="0.761719" stopColor="#D62E29"/>
            <stop offset="0.765625" stopColor="#D62E29"/>
            <stop offset="0.769531" stopColor="#D52D29"/>
            <stop offset="0.773438" stopColor="#D52D29"/>
            <stop offset="0.777344" stopColor="#D42D29"/>
            <stop offset="0.78125" stopColor="#D42C2A"/>
            <stop offset="0.785156" stopColor="#D42C2A"/>
            <stop offset="0.789062" stopColor="#D32C2A"/>
            <stop offset="0.792969" stopColor="#D32C2A"/>
            <stop offset="0.796875" stopColor="#D22B2A"/>
            <stop offset="0.808594" stopColor="#D22A2A"/>
            <stop offset="0.8125" stopColor="#D12A2A"/>
            <stop offset="0.816406" stopColor="#D1292A"/>
            <stop offset="0.824219" stopColor="#D0292A"/>
            <stop offset="0.832031" stopColor="#CF282A"/>
            <stop offset="0.839844" stopColor="#CE272B"/>
            <stop offset="0.847656" stopColor="#CE272B"/>
            <stop offset="0.851562" stopColor="#CD262B"/>
            <stop offset="0.855469" stopColor="#CC252B"/>
            <stop offset="0.863281" stopColor="#CB252B"/>
            <stop offset="0.871094" stopColor="#CB242B"/>
            <stop offset="0.878906" stopColor="#CA242B"/>
            <stop offset="0.882812" stopColor="#CA232B"/>
            <stop offset="0.886719" stopColor="#CA232B"/>
            <stop offset="0.890625" stopColor="#CA232B"/>
            <stop offset="0.894531" stopColor="#C9232B"/>
            <stop offset="0.898438" stopColor="#C8222B"/>
            <stop offset="0.902344" stopColor="#C8222B"/>
            <stop offset="0.90625" stopColor="#C7212B"/>
            <stop offset="0.910156" stopColor="#C7212C"/>
            <stop offset="0.917969" stopColor="#C6202C"/>
            <stop offset="0.925781" stopColor="#C5202C"/>
            <stop offset="0.941406" stopColor="#C51F2C"/>
            <stop offset="0.945312" stopColor="#C41F2C"/>
            <stop offset="0.949219" stopColor="#C41E2C"/>
            <stop offset="0.953125" stopColor="#C41E2C"/>
            <stop offset="0.957031" stopColor="#C31E2C"/>
            <stop offset="0.964844" stopColor="#C21D2C"/>
            <stop offset="0.972656" stopColor="#C21C2C"/>
            <stop offset="0.976562" stopColor="#C11C2C"/>
            <stop offset="0.980469" stopColor="#C01C2C"/>
            <stop offset="0.988281" stopColor="#C01B2C"/>
            <stop offset="0.992188" stopColor="#BF1B2C"/>
            <stop offset="1" stopColor="#BF1B2C"/>
          </radialGradient>
          <clipPath id="clip0_11_7763">
          <rect width="500" height="500" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <span className={classNames(`inline-block font-['monospace'] uppercase`, textColor)}>Web3Firewall</span>
    </div>
  )
}

export default FireLogo
